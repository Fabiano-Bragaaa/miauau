import {
  Controller,
  type FieldValues,
  type UseControllerProps,
} from 'react-hook-form';

import { TextInput, type TextInputProps } from '../text-input';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  error: errorProps,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TextInput
          value={value}
          onChangeText={onChange}
          error={error?.message || errorProps}
          {...textInputProps}
        />
      )}
    />
  );
}
