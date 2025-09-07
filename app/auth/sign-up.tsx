import { Image } from 'react-native';

import { Button } from '@/src/ui/components/button';
import { Screen } from '@/src/ui/components/screen';
import { Text } from '@/src/ui/components/text';
import { TextInput } from '@/src/ui/components/text-input';
import { TextLink } from '@/src/ui/containers/auth/text-link';

export default function SignUp() {
  return (
    <Screen>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
      <Text marginBottom="s32" mt="s12" variant="title28" alignSelf="center">
        Crie sua conta
      </Text>
      <TextInput label="Nome" placeholder="Digite seu nome" />
      <TextInput label="Email" placeholder="Digite seu email" />
      <TextInput label="Senha" placeholder="Digite sua senha" />
      <Button title="Criar conta" onPress={() => {}} mt="s40" />
      <TextLink text="Já possui uma conta?" ctaText="Entrar" />
    </Screen>
  );
}
