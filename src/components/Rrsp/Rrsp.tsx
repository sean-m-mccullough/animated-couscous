import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Field } from 'formik';
import React from 'react';

import { FieldRenderProps } from '../../types/form';

const Rrsp: React.FC = () => (
  <Field name="rrsp">
    {({ field }: FieldRenderProps) => (
      <TextField
        label="RRSP"
        InputProps={{
          ...field,
          type: 'number',
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
    )}
  </Field>
);

export default Rrsp;
