import { AppState } from '@app/store';
import { createSelector } from '@reduxjs/toolkit';
import { ShipsCollectionSelectors } from '@store/selectors';

const featureStateSelector = (state: AppState) => state.features.ships.addEdit;

export const editItem = createSelector(
  featureStateSelector,
  ShipsCollectionSelectors.getAllShipEntities,
  ({ editItemId }, ships) => ships[editItemId]
);

export const isDialogOpen = createSelector(featureStateSelector, (state) => state.addEditDialogOpen);
