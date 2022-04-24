import { useAppDispatch, useAppSelector } from '@app/hooks';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { ShipsCollectionActions } from '@store/actions';
import React from 'react';
import { ShipsDeleteActions } from '../actions';
import { ShipsDeleteSelectors } from '../selectors';

export const ShipDeleteDialogContainer = () => {
  const dispatch = useAppDispatch();

  const deleteItemId = useAppSelector(ShipsDeleteSelectors.deleteItemId);
  const isDialogOpen = useAppSelector(ShipsDeleteSelectors.isDialogOpen);

  const handleClose = () => {
    dispatch(ShipsDeleteActions.closeDialog());
  };

  const handleRemoval = () => {
    dispatch(ShipsCollectionActions.remove({ id: deleteItemId }));
    handleClose();
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleClose}>
      <DialogTitle>Are you sure you want to delete the ship?</DialogTitle>

      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleRemoval}>
          OK
        </Button>

        <Button color="secondary" variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
