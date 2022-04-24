import { dataEpics } from '@store/data-epics';
import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { AppEpic } from './types';

const epics = combineEpics(dataEpics);

const rootEpic: AppEpic = (action$, store$, dependencies) =>
  epics(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export default rootEpic;
