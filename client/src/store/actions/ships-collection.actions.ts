import { CreateShipDto, ShipResponseDto, ShipResponseDtoPaginatedList, UpdateShipDto } from '@app/ship-management-api';
import { createAction } from '@reduxjs/toolkit';

export const loadList = createAction('[Ships Collection] Load List');

export const loadListSuccess = createAction<{ paginatedShips: ShipResponseDtoPaginatedList }>('[Ships Collection] Load List Success');

export const add = createAction<{ request: CreateShipDto }>('[Ships Collection] Add Ship');

export const addSuccess = createAction<{ ship: ShipResponseDto }>('[Ships Collection] Add Ship Success');

export const edit = createAction<{ id: string; request: UpdateShipDto }>('[Ships Collection] Edit Ship');

export const editSuccess = createAction<{ ship: ShipResponseDto }>('[Ships Collection] Edit Ship Success');

export const remove = createAction<{ id: string }>('[Ships Collection] Remove Ship');

export const removeSuccess = createAction<{ id: string }>('[Ships Collection] Remove Ship Success');
