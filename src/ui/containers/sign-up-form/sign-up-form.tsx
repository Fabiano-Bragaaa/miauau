import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/button';
import { FormTextInput } from '../../components/form/form-text-input';
import { type SignUpSchema, signUpSchema } from './sign-up-schema';
type SignUpFormProps = {
  onSubmit: (data: SignUpSchema) => void;
};

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  const { control, handleSubmit, formState } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  return (
    <>
      <FormTextInput
        control={control}
        name="fullname"
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />
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
      <FormTextInput
        control={control}
        name="confirmPassword"
        label="Confirmar senha"
        placeholder="Digite sua senha novamente"
      />
      <Button
        disabled={!formState.isValid}
        title="Cadastrar"
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
}
