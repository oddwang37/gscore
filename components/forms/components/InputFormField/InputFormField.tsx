import React, { InputHTMLAttributes } from 'react';
import type { FieldValues, FieldPath, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { InputField } from 'components/UI';

const InputFormField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  id,
  control,
  name,
  rules,
  ...props
}: InputProps<TFieldValues, TName>) => {
  const {
    field,
    fieldState: { error, isDirty },
  } = useController({ control, name, rules });

  return <InputField {...field} {...props} error={error?.message} isDirty={isDirty} />;
};

export default InputFormField;

type InputProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  id?: string;
} & UseControllerProps<TFieldValues, TName> &
  InputHTMLAttributes<HTMLInputElement>;
