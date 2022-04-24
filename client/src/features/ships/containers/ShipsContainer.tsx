import { useAppDispatch } from '@app/hooks';
import { AddButton } from '@components/AddButton';
import { Box } from '@mui/material';
import { ShipsCollectionActions } from '@store/actions';
import React, { useEffect } from 'react';
import { ShipsAddEditActions } from '../actions';
import { ShipAddEditDialogContainer } from './ShipAddEditDialogContainer';
import { ShipDeleteDialogContainer } from './ShipDeleteDialogContainer';
import './ShipsContainer.scss';
import { ShipsListContainer } from './ShipsListContainer';

export const ShipsContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ShipsCollectionActions.loadList());
  }, [dispatch]);

  const addItemHandler = () => {
    dispatch(ShipsAddEditActions.openDialog({ id: undefined }));
  };

  return (
    <>
      <Box className="ships-container">
        <ShipsListContainer />
      </Box>

      <AddButton onAddItem={addItemHandler} />

      <ShipDeleteDialogContainer />

      <ShipAddEditDialogContainer />
    </>
  );
};
