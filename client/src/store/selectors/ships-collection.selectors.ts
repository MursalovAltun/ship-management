import { AppState } from '@app/store';
import { adapter } from '@store/reducers/ships-collection.reducer';

const shipsRootSelector = (state: AppState) => state.data.shipsCollection;

export const { selectAll: getAllShips, selectEntities: getAllShipEntities } = adapter.getSelectors(shipsRootSelector);
