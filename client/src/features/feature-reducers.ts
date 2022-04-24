import { combineReducers } from '@reduxjs/toolkit';
import { shipsFeatureReducer } from './ships/reducers/ships-feature.reducer';

export const featureReducers = combineReducers({
  ships: shipsFeatureReducer,
});
