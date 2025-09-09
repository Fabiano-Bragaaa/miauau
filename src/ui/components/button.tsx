import { ActivityIndicator } from 'react-native';

import { type ThemeColors } from '../theme/theme';
import { TouchableOpacityBox, type TouchableOpacityBoxProps } from './box';
import { Text } from './text';

type ButtonVariant = 'primary' | 'secondary';
type ButtonUI = {
  container: ThemeColors;
  content: ThemeColors;
};

const buttonColors: Record<
  ButtonVariant,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: 'primary',
      content: 'text',
    },
    disabled: {
      container: 'gray1',
      content: 'text',
    },
  },
  secondary: {
    default: {
      container: 'gray1',
      content: 'text',
    },
    disabled: {
      container: 'gray1',
      content: 'text',
    },
  },
};

type ButtonProps = TouchableOpacityBoxProps & {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
};

export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonProps =
    buttonColors[variant][disabled && !loading ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      onPress={onPress}
      bg={buttonProps.container}
      borderRadius="default"
      padding="padding"
      alignItems="center"
      justifyContent="center"
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonProps.content} size={'small'} />
      ) : (
        <Text color={buttonProps.content}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}
