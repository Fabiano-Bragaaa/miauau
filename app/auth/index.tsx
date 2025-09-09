import { Image } from 'react-native';

import { useAuthSignIn } from '@/src/domain/auth/operations/use-auth-sign-in';
import { Screen } from '@/src/ui/components/screen';
import { Text } from '@/src/ui/components/text';
import { TextLink } from '@/src/ui/containers/auth/text-link';
import { SignInForm } from '@/src/ui/containers/sign-in-form/sign-in-form';
import { type SignInSchema } from '@/src/ui/containers/sign-in-form/sign-in-schema';

export default function SignIn() {
  const { mutate: signIn, isLoading } = useAuthSignIn();

  function handleSubmit(data: SignInSchema) {
    signIn(data);
  }

  return (
    <Screen scrollable>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
      <Text marginBottom="s32" mt="s12" variant="title28" alignSelf="center">
        Seja bem-vindo de volta
      </Text>
      <SignInForm onSubmit={handleSubmit} isLoading={isLoading} />
      <TextLink
        text="Ainda não tem uma conta?"
        ctaText="Criar"
        href="/auth/sign-up"
      />
    </Screen>
  );
}
