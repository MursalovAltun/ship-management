import { featureReducers } from '@features/feature-reducers';
import { combineReducers } from '@reduxjs/toolkit';
import { dataReducers } from '@store/data-reducer';
import { layoutReducer } from '@store/reducers/layout.reducer';
import RouterStore from './router';

export const rootReducer = combineReducers({
  router: RouterStore.reducer,
  layout: layoutReducer,
  data: dataReducers,
  features: featureReducers,
});
