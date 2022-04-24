import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { rootReducer } from './root-reducer';
import { store } from './store';

export type AppState = ReturnType<typeof rootReducer>;
export type AppEpic = Epic<AnyAction, AnyAction, AppState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
