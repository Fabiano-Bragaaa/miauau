import { type LinkProps, router } from 'expo-router';
import { Pressable } from 'react-native';

import { Text } from '../../components/text';

type Props = {
  text: string;
  ctaText: string;
  href?: LinkProps['href'];
};

export function TextLink({ text, ctaText, href }: Props) {
  function handlePress() {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  }
  return (
    <Pressable onPress={handlePress}>
      <Text color="gray2" alignSelf="center" mt="s24">
        {text} <Text color="primary">{ctaText}</Text>
      </Text>
    </Pressable>
  );
}
