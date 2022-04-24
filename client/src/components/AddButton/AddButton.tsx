import { AddCircle } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React from 'react';

interface Props {
  onAddItem: () => void;
}

export const AddButton = ({ onAddItem }: Props) => {
  return (
    <Fab color="primary" style={{ position: 'fixed', bottom: 16, right: 16 }} onClick={onAddItem}>
      <AddCircle />
    </Fab>
  );
};
