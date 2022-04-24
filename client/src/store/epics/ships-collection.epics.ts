import { filterAction, mapResponseToAction } from '@app/operators';
import { createShipManagementApiClient, ShipsApi } from '@app/ship-management-api';
import { AppEpic } from '@app/store';
import { ShipsCollectionActions } from '@store/actions';
import { combineEpics } from 'redux-observable';
import { from, switchMap } from 'rxjs';

const clientFactory = () => createShipManagementApiClient(ShipsApi);

const loadListEpic: AppEpic = (actions$) =>
  actions$.pipe(
    filterAction(ShipsCollectionActions.loadList),
    switchMap(() =>
      // TODO: Rework to properly handle server side pagination on client side
      from(clientFactory().apiShipsGet(1, 500)).pipe(
        mapResponseToAction((response) => ShipsCollectionActions.loadListSuccess({ paginatedShips: response }))
      )
    )
  );

const addEpic: AppEpic = (actions$) =>
  actions$.pipe(
    filterAction(ShipsCollectionActions.add),
    switchMap(({ request }) =>
      from(clientFactory().apiShipsPost(request)).pipe(mapResponseToAction((ship) => ShipsCollectionActions.addSuccess({ ship })))
    )
  );

const editEpic: AppEpic = (actions$) =>
  actions$.pipe(
    filterAction(ShipsCollectionActions.edit),
    switchMap(({ id, request }) =>
      from(clientFactory().apiShipsIdPut(id, request)).pipe(mapResponseToAction((ship) => ShipsCollectionActions.editSuccess({ ship })))
    )
  );

const removeEpic: AppEpic = (actions$) =>
  actions$.pipe(
    filterAction(ShipsCollectionActions.remove),
    switchMap(({ id }) =>
      from(clientFactory().apiShipsIdDelete(id)).pipe(mapResponseToAction(() => ShipsCollectionActions.removeSuccess({ id })))
    )
  );

export const shipsCollectionEpics = combineEpics(loadListEpic, addEpic, removeEpic, editEpic);
