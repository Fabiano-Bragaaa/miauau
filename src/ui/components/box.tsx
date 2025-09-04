import {
  backgroundColor,
  type BackgroundColorProps,
  backgroundColorShorthand,
  type BackgroundColorShorthandProps,
  border,
  type BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  type LayoutProps,
  spacing,
  type SpacingProps,
  spacingShorthand,
  type SpacingShorthandProps,
} from '@shopify/restyle';
import { type ComponentProps } from 'react';
import {
  type PressableProps,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';

import { type Theme } from '../theme/theme';

export const Box = createBox<Theme>();

export type BoxProps = ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorShorthandProps<Theme>;

export type TouchableOpacityBoxProps = RestyleTypes & TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [
    backgroundColor,
    spacing,
    layout,
    border,
    spacingShorthand,
    backgroundColorShorthand,
  ],
  TouchableOpacity
);

export type PressableBoxProps = PressableProps & RestyleTypes;
export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [
    backgroundColor,
    spacing,
    layout,
    border,
    spacingShorthand,
    backgroundColorShorthand,
  ],
  TouchableOpacity
);
