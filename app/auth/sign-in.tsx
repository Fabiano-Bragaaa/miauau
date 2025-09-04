import { Image } from 'react-native';

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
      <Text marginBottom="s24" mt="s12" variant="title28" alignSelf="center">
        Seja bem-vindo de volta
      </Text>
      <TextInput
        label="Email"
        placeholder="Digite seu email"
        boxProps={{ marginVertical: 's32' }}
      />
      <TextInput label="Email" placeholder="Digite seu email" />
    </Screen>
  );
}
