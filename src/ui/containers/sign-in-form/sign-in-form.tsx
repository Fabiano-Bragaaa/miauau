import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/button';
import { FormTextInput } from '../../components/form/form-text-input';
import { type SignInSchema, signInSchema } from './sign-in-schema';

type SignInFormProps = {
  onSubmit: (data: SignInSchema) => void;
  isLoading: boolean;
};

export function SignInForm({ onSubmit, isLoading }: SignInFormProps) {
  const { control, handleSubmit, formState } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  return (
    <>
      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Digite seu email"
      />
      <FormTextInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
      />
      <Button
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid || isLoading}
        loading={isLoading}
      />
    </>
  );
}
