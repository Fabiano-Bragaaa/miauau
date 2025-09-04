import { useState } from 'react';
import {
  TextInput as RNTextInput,
  type TextInputProps as RNTextInputProps,
} from 'react-native';

import { useAppTheme } from '../theme/use-app-theme';
import { Box, type BoxProps } from './box';
import { Text } from './text';

type TextInputProps = RNTextInputProps & {
  label: string;
  error?: string;
  boxProps?: BoxProps;
};

export function TextInput({
  label,
  error,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = error ? 'fbErrorSurface' : isFocused ? 'text' : 'gray1';

  return (
    <Box {...boxProps}>
      <Text mb="s4" variant="text18">
        {label}
      </Text>
      <Box>
        <Box {...textInputBoxStyles} borderColor={borderColor}>
          <RNTextInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rnTextInputProps}
            style={{
              ...textVariants.title16,
              height: '100%',
              width: '100%',
              flexShrink: 1,
            }}
            placeholderTextColor={colors.gray2}
          />
        </Box>
        <Text color="fbErrorSurface" variant="text12" marginVertical="s4">
          {error}
        </Text>
      </Box>
    </Box>
  );
}

const textInputBoxStyles: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 'padding',
  borderWidth: 2,
  borderRadius: 'default',
  height: 50,
};
