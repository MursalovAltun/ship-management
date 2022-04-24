import { createReducer } from '@reduxjs/toolkit';
import { ShipsAddEditActions } from '../actions';

interface IState {
  editItemId?: string;
  addEditDialogOpen: boolean;
}

const initialState: IState = {
  addEditDialogOpen: false,
  editItemId: undefined,
};

export const shipsAddEditReducer = createReducer<IState>(initialState, (builder) =>
  builder
    .addCase(ShipsAddEditActions.openDialog, (state, { payload }) => ({ ...state, addEditDialogOpen: true, editItemId: payload.id }))
    .addCase(ShipsAddEditActions.closeDialog, (state) => ({ ...state, addEditDialogOpen: false, editItemId: undefined }))
);
