import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Field } from 'formik';
import React from 'react';

import { FieldRenderProps } from '../../types/form';

const Tfsa = () => (
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
