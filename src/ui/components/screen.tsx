import React, { type PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { useAppSafeArea } from '@/src/hooks/use-app-safe-area';

import { Box, type BoxProps } from './box';

export function Screen({
  children,
  scrollable = false,
  style,
  ...boxProps
}: PropsWithChildren & BoxProps & { scrollable?: boolean }) {
  const Container = scrollable ? ScrollView : View;
  const { top, bottom } = useAppSafeArea();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Box
        flex={1}
        bg="background"
        paddingHorizontal="padding"
        style={[{ paddingTop: top, paddingBottom: bottom }, style]}
        {...boxProps}
      >
        <Container showsVerticalScrollIndicator={false}>{children}</Container>
      </Box>
    </KeyboardAvoidingView>
  );
}
