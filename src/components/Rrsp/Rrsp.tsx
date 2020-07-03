import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Field } from 'formik';
import React from 'react';

import { FieldRenderProps } from '../../types/form';

const Rrsp = () => (
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
