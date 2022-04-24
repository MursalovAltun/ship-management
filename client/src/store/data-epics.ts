import { combineEpics } from 'redux-observable';
import { shipsCollectionEpics } from './epics/ships-collection.epics';

export const dataEpics = combineEpics(shipsCollectionEpics);
