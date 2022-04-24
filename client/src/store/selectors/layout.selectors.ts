import { RootState } from '@app/store';
import { createSelector } from '@reduxjs/toolkit';

const featureStateSelector = createSelector(
  (state: RootState) => state,
  (state) => state.layout
);

export const getLoading = createSelector(featureStateSelector, (layout) => layout.loading);
