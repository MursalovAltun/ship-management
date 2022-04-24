import { ActionCreatorWithPayload, AnyAction } from '@reduxjs/toolkit';
import { filter, map, Observable } from 'rxjs';

export function filterAction<T>(...actionCreator: ActionCreatorWithPayload<T>[]) {
  return function (source$: Observable<AnyAction>) {
    return source$.pipe(
      filter((action) => actionCreator.some((creator) => creator.match(action))),
      map((action) => action.payload)
    );
  };
}
