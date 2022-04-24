import { useAppDispatch, useAppSelector } from '@app/hooks';
import { ShipResponseDto } from '@app/ship-management-api';
import { ShipsCollectionSelectors } from '@store/selectors';
import React from 'react';
import { ShipsAddEditActions, ShipsDeleteActions } from '../actions';
import { ShipListItem } from '../components/ShipListItem';

export const ShipsListContainer = () => {
  const dispatch = useAppDispatch();
  const ships = useAppSelector(ShipsCollectionSelectors.getAllShips);

  const onShipRemove = ({ id }: ShipResponseDto) => {
    dispatch(ShipsDeleteActions.openDialog({ id }));
  };

  const onShipEdit = ({ id }: ShipResponseDto) => {
    dispatch(ShipsAddEditActions.openDialog({ id }));
  };

  return (
    <>
      {ships.map((ship) => (
        <ShipListItem key={ship.id} item={ship} onRemove={onShipRemove} onEdit={onShipEdit} />
      ))}
    </>
  );
};
