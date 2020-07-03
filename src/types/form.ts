import { FieldInputProps } from 'formik';

export interface FieldRenderProps<T = any> {
  field: FieldInputProps<T>;
}
