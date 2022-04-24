import { ShipResponseDto } from '@app/ship-management-api';
import { Box, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIMask } from 'react-imask';
import * as yup from 'yup';

// const ShipCodeInput = IMaskMixin(({ inputRef, ...props }) => <TextField {...props} />);

export interface ShipFormModel {
  name: string;
  code: string;
  length: string;
  width: string;
}

const clearFormState: ShipFormModel = {
  name: '',
  code: '',
  length: '',
  width: '',
};

interface Props {
  item?: ShipResponseDto;

  type: 'Add' | 'Edit';
}

export const shipFormSchema: yup.SchemaOf<ShipFormModel> = yup.object({
  name: yup.string().required(),
  code: yup
    .string()
    .required()
    .test((value) => /^[A-Z]{4}-[1-9]{4}-[A-Z][1-9]$/gim.test(value)),
  length: yup.string().required(),
  width: yup.string().required(),
});

export const ShipForm = ({ item, type }: Props) => {
  const {
    reset,
    register,
    formState: { errors },
  } = useFormContext<ShipFormModel>();

  const { ref } = useIMask({
    mask: 'aaaa-0000-a0',
  });

  useEffect(() => {
    reset(type === 'Add' ? clearFormState : { ...item, width: item.width.toString(), length: item.length.toString() });
  }, [reset, item, type]);

  return (
    <form>
      <Box sx={{ marginY: 2 }}>
        <TextField
          autoComplete="off"
          helperText={errors.name?.message}
          error={!!errors.name}
          label="Name"
          fullWidth
          placeholder="Enter ship name"
          {...register('name')}
        />
      </Box>

      <Box sx={{ marginY: 2 }}>
        <TextField
          autoComplete="off"
          label="Code"
          helperText={errors.code?.message}
          error={!!errors.code}
          fullWidth
          inputRef={ref}
          placeholder="Enter ship code: AAAA-1111-A1"
          disabled={type === 'Edit'}
          {...register('code')}
        />
      </Box>

      <Box sx={{ marginY: 2 }}>
        <TextField
          type="number"
          helperText={errors.length?.message}
          error={!!errors.length}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 1 }}
          autoComplete="off"
          label="Length"
          fullWidth
          placeholder="Enter ship length"
          {...register('length')}
        />
      </Box>

      <Box sx={{ marginY: 2 }}>
        <TextField
          type="number"
          helperText={errors.width?.message}
          error={!!errors.width}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 1 }}
          autoComplete="off"
          label="Width"
          fullWidth
          placeholder="Enter ship width"
          {...register('width')}
        />
      </Box>
    </form>
  );
};
