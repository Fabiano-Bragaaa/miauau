import { createTheme } from '@shopify/restyle';
const palette = {
  fieryRed: '#D32F2F',
  midnightBlack: '#1B1B1B',
  charcoalGrey: '#302E2D',
  stoneGrey: '#5C5C5C',
  pureWhite: '#FFFFFF',
  transparent: 'transparent',
  fbErrorBg: '#3A1B1B',
  fbErrorSurface: '#E62A38',

  fbSuccessBg: '#1E3320',
  fbSuccessSurface: '#4CAF50',

  fbWarningBg: '#1A2B3A',
  fbWarningSurface: '#FFC107',

  fbInfoBg: '#332B1A',
  fbInfoSurface: '#42A5F5',
};

const theme = createTheme({
  colors: {
    background: palette.midnightBlack,
    primary: palette.fieryRed,
    text: palette.pureWhite,
    gray1: palette.charcoalGrey,
    gray2: palette.stoneGrey,
    ...palette,
  },

  spacing: {
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
    padding: 16,
  },
  textVariants: {
    defaults: {
      color: 'text',
      fontFamily: 'Poppins_400Regular',
      fontSize: 16,
      lineHeight: 18,
    },
    title28: {
      fontSize: 28,
      fontFamily: 'Poppins_600SemiBold',
      lineHeight: 30,
    },
    title22: {
      fontSize: 22,
      fontFamily: 'Poppins_600SemiBold',
      lineHeight: 24,
    },
    title16: {
      fontSize: 16,
      fontFamily: 'Poppins_600SemiBold',
      lineHeight: 18,
    },
    title14: {
      fontSize: 14,
      fontFamily: 'Poppins_600SemiBold',
      lineHeight: 16,
    },
    text18: {
      fontSize: 18,
      lineHeight: 20,
      fontFamily: 'Poppins_400Regular',
    },
    text16: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: 'Poppins_400Regular',
    },
    text14: {
      fontSize: 14,
      lineHeight: 16,
      fontFamily: 'Poppins_400Regular',
    },
    text12: {
      fontSize: 12,
      lineHeight: 14,
      fontFamily: 'Poppins_400Regular',
    },
  },
  borderRadii: {
    default: 16,
    rounded: 500,
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
export default theme;
