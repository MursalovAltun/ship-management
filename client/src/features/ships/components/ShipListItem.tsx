import { ShipResponseDto } from '@app/ship-management-api';
import { DeleteForever, EditOutlined } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';

interface Props {
  item: ShipResponseDto;

  onRemove: (item: ShipResponseDto) => void;
  onEdit: (item: ShipResponseDto) => void;
}

export const ShipListItem = ({ item, onRemove, onEdit }: Props) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography style={{ marginBottom: 5, fontWeight: 'bold' }}>{item.name}</Typography>

        <Typography>Code: {item.code}</Typography>

        <Typography>Length: {item.length}</Typography>
        <Typography>Width: {item.width}</Typography>
      </CardContent>

      <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => onRemove(item)} startIcon={<DeleteForever />} variant="outlined" color="secondary">
          Delete
        </Button>

        <Button onClick={() => onEdit(item)} startIcon={<EditOutlined />} variant="outlined" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
