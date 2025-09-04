import { type ThemeColors } from '../theme/theme';
import { TouchableOpacityBox, type TouchableOpacityBoxProps } from './box';
import { Text } from './text';

type ButtonVariant = 'primary' | 'secondary';

const buttonColors: Record<
  ButtonVariant,
  { bg: ThemeColors; text: ThemeColors }
> = {
  primary: {
    bg: 'primary',
    text: 'text',
  },
  secondary: {
    bg: 'gray1',
    text: 'text',
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
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonProps = buttonColors[variant];
  return (
    <TouchableOpacityBox
      onPress={onPress}
      bg={buttonProps.bg}
      borderRadius="default"
      padding="padding"
      alignItems="center"
      justifyContent="center"
      {...touchableOpacityBoxProps}
    >
      <Text color={buttonProps.text}>{title}</Text>
    </TouchableOpacityBox>
  );
}
