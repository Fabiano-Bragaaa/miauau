import { Image } from 'react-native';

import { Screen } from '@/src/ui/components/screen';
import { Text } from '@/src/ui/components/text';
import { TextLink } from '@/src/ui/containers/auth/text-link';
import { SignInForm } from '@/src/ui/containers/sign-in-form/sign-in-form';

export default function SignIn() {
  return (
    <Screen scrollable>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
      <Text marginBottom="s32" mt="s12" variant="title28" alignSelf="center">
        Seja bem-vindo de volta
      </Text>
      <SignInForm onSubmit={() => {}} isLoading={false} />
      <TextLink
        text="Ainda não tem uma conta?"
        ctaText="Criar"
        href="/auth/sign-up"
      />
    </Screen>
  );
}
