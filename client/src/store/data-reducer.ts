import { combineReducers } from '@reduxjs/toolkit';
import { shipsCollectionReducer } from './reducers/ships-collection.reducer';

export const dataReducers = combineReducers({
  shipsCollection: shipsCollectionReducer,
});
