import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import storeLogger from './logger';
import rootEpic from './root-epic';
import { rootReducer } from './root-reducer';
import RouterStore from './router';
import { AppState } from './types';

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, AppState>();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defulatMiddlewares) => [...defulatMiddlewares({ thunk: false }), epicMiddleware, storeLogger, RouterStore.middleware],
});

epicMiddleware.run(rootEpic);
