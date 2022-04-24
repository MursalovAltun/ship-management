import { createReducer } from '@reduxjs/toolkit';
import { LayoutActions } from '../actions';

interface LayoutState {
  loading: boolean;
}

const initialState: LayoutState = {
  loading: false,
};

export const layoutReducer = createReducer(initialState, (builder) =>
  builder.addCase(LayoutActions.toggleLoading, (state) => ({ loading: !state.loading }))
);
