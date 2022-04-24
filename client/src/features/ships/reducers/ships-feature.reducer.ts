import { combineReducers } from '@reduxjs/toolkit';
import { shipsAddEditReducer } from './ships-add-edit.reducer';
import { shipsDeleteReducer } from './ships-delete.reducer';

export const shipsFeatureReducer = combineReducers({
  addEdit: shipsAddEditReducer,
  delete: shipsDeleteReducer,
});
