import { Image } from 'react-native';

import { useAuthSignUp } from '@/src/domain/auth/operations/use-auth-sign-up';
import { Screen } from '@/src/ui/components/screen';
import { Text } from '@/src/ui/components/text';
import { TextLink } from '@/src/ui/containers/auth/text-link';
import { SignUpForm } from '@/src/ui/containers/sign-up-form/sign-up-form';
import { type SignUpSchema } from '@/src/ui/containers/sign-up-form/sign-up-schema';

export default function SignUpScreen() {
  const { mutate: signUp, isLoading } = useAuthSignUp();
  function handleSubmit(data: SignUpSchema) {
    signUp(data);
  }

  return (
    <Screen scrollable>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
      <Text marginBottom="s32" variant="title28" alignSelf="center">
        Crie sua conta
      </Text>
      <SignUpForm onSubmit={handleSubmit} isLoading={isLoading} />
      <TextLink text="Já possui uma conta?" ctaText="Entrar" />
    </Screen>
  );
}
