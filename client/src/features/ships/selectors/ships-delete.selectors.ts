import { AppState } from '@app/store';
import { createSelector } from '@reduxjs/toolkit';

const featureStateSelector = (state: AppState) => state.features.ships.delete;

export const deleteItemId = createSelector(featureStateSelector, (state) => state.deleteItemId);

export const isDialogOpen = createSelector(deleteItemId, (id) => !!id);
