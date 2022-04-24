import { ShipResponseDto } from '@app/ship-management-api';
import { createEntityAdapter, createReducer, EntityState } from '@reduxjs/toolkit';
import { ShipsCollectionActions } from '@store/actions';

interface IState extends EntityState<ShipResponseDto> {}

export const adapter = createEntityAdapter<ShipResponseDto>({
  selectId: (ship) => ship.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const shipsCollectionReducer = createReducer<IState>(adapter.getInitialState(), (builder) =>
  builder
    .addCase(ShipsCollectionActions.loadListSuccess, (state, { payload }) => adapter.addMany(state, payload.paginatedShips.items))
    .addCase(ShipsCollectionActions.removeSuccess, (state, { payload }) => adapter.removeOne(state, payload.id))
    .addCase(ShipsCollectionActions.addSuccess, (state, { payload }) => adapter.addOne(state, payload.ship))
    .addCase(ShipsCollectionActions.editSuccess, (state, { payload }) =>
      adapter.updateOne(state, { id: payload.ship.id, changes: { ...payload.ship } })
    )
);
