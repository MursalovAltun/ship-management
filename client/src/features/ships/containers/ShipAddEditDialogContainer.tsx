import { useAppDispatch, useAppSelector } from '@app/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { ShipsCollectionActions } from '@store/actions';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ShipsAddEditActions } from '../actions';
import { ShipForm, ShipFormModel, shipFormSchema } from '../components/ShipForm';
import { ShipsAddEditSelectors } from '../selectors';

export const ShipAddEditDialogContainer = () => {
  const methods = useForm<ShipFormModel>({
    resolver: yupResolver(shipFormSchema),
  });

  const dispatch = useAppDispatch();

  const isDialogOpen = useAppSelector(ShipsAddEditSelectors.isDialogOpen);
  const editItem = useAppSelector(ShipsAddEditSelectors.editItem);

  const handleClose = () => {
    dispatch(ShipsAddEditActions.closeDialog());
  };

  const type = editItem?.id ? 'Edit' : 'Add';

  const submit = ({ name, code, length, width }: ShipFormModel) => {
    if (type === 'Add') {
      dispatch(
        ShipsCollectionActions.add({
          request: {
            name,
            code,
            length: Number(length),
            width: Number(width),
          },
        })
      );
    } else {
      dispatch(
        ShipsCollectionActions.edit({
          id: editItem.id,
          request: {
            name,
            length: Number(length),
            width: Number(width),
          },
        })
      );
    }

    handleClose();
  };

  return (
    <Dialog fullWidth open={isDialogOpen} onClose={handleClose}>
      <DialogTitle>
        {type} ship {type === 'Edit' && `: ${editItem?.name}`}
      </DialogTitle>

      <DialogContent>
        <FormProvider {...methods}>
          <ShipForm item={editItem} type={type} />
        </FormProvider>
      </DialogContent>

      <DialogActions>
        <Button onClick={methods.handleSubmit(submit)} color="primary" variant="contained">
          {type}
        </Button>

        <Button color="secondary" variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
