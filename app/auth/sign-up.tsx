import { Image } from 'react-native';

import { Screen } from '@/src/ui/components/screen';
import { Text } from '@/src/ui/components/text';
import { TextLink } from '@/src/ui/containers/auth/text-link';
import { SignUpForm } from '@/src/ui/containers/sign-up-form/sign-up-form';
import { type SignUpSchema } from '@/src/ui/containers/sign-up-form/sign-up-schema';

export default function SignUp() {
  function handleSubmit(data: SignUpSchema) {
    console.log(data);
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
      <SignUpForm onSubmit={handleSubmit} />
      <TextLink text="Já possui uma conta?" ctaText="Entrar" />
    </Screen>
  );
}
