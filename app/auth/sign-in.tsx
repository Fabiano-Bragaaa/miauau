import { Image } from 'react-native';

import { Button } from '@/src/ui/components/button';
import { Screen } from '@/src/ui/components/screen';
import { Text } from '@/src/ui/components/text';
import { TextInput } from '@/src/ui/components/text-input';

export default function SignIn() {
  return (
    <Screen>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
      <Text marginBottom="s32" mt="s12" variant="title28" alignSelf="center">
        Seja bem-vindo de volta
      </Text>
      <TextInput label="Email" placeholder="Digite seu email" />
      <TextInput label="Senha" placeholder="Digite sua senha" />
      <Button title="Entrar" onPress={() => {}} mt="s40" />
    </Screen>
  );
}
