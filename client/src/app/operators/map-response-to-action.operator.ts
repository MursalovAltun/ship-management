/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

export function mapResponseToAction<T>(project: (value: T) => AnyAction) {
  return function (source$: Observable<AxiosResponse<T, any>>) {
    return source$.pipe(
      map((response) => response.data),
      map((data) => project(data))
    );
  };
}
