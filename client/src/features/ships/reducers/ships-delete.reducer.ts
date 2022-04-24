import { createReducer } from '@reduxjs/toolkit';
import { ShipsDeleteActions } from '../actions';

interface IState {
  deleteItemId?: string;
}

const initialState: IState = {
  deleteItemId: undefined,
};

export const shipsDeleteReducer = createReducer<IState>(initialState, (builder) =>
  builder
    .addCase(ShipsDeleteActions.openDialog, (state, { payload }) => ({ ...state, deleteItemId: payload.id }))
    .addCase(ShipsDeleteActions.closeDialog, (state) => ({ ...state, deleteItemId: undefined }))
);
