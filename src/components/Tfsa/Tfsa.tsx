import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Field } from 'formik';
import React from 'react';

import { FieldRenderProps } from '../../types/form';

const Tfsa: React.FC = () => (
  <Field name="tfsa">
    {({ field }: FieldRenderProps) => (
      <TextField
        label="TFSA"
        InputProps={{
          ...field,
          type: 'number',
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
    )}
  </Field>
);

export default Tfsa;
