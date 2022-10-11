import React, { InputHTMLAttributes } from 'react';
import type { FieldValues, FieldPath, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { Input } from 'components/UI';

const InputField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
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

  return <Input {...field} {...props} error={error?.message} isDirty={isDirty} />;
};

export default InputField;

type InputProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  id?: string;
} & UseControllerProps<TFieldValues, TName> &
  InputHTMLAttributes<HTMLInputElement>;
