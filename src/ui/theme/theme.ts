import { createTheme } from "@shopify/restyle";

const palette = {
  fieryRed: "#A31621",
  midnightBlack: "#171614",
  pureWhite: "#FDFFFF",
  transparent: "transparent",
};

const theme = createTheme({
  colors: {
    background: palette.pureWhite,
    primary: palette.fieryRed,
    text: palette.midnightBlack,
    ...palette
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
    padding: 16
  },
  textVariants: {
    defaults: {
      color: "text",
      fontFamily: "Poppins_400Regular",
      fontSize: 16,
      lineHeight: 18,
    },
    title28: {
      fontSize: 28,
      fontFamily: "Poppins_600SemiBold",
      lineHeight: 30,
    },
    title22: {
      fontSize: 22,
      fontFamily: "Poppins_600SemiBold",
      lineHeight: 24,
    },
    title16: {
      fontSize: 16,
      fontFamily: "Poppins_600SemiBold",
      lineHeight: 18,
    },
    title14: {
      fontSize: 14,
      fontFamily: "Poppins_600SemiBold",
      lineHeight: 16,
    },
    text18: {
      fontSize: 18,
      lineHeight: 20,
      fontFamily: "Poppins_400Regular",
    },
    text16: {
      fontSize: 16,
      lineHeight: 18,
      fontFamily: "Poppins_400Regular",
    },
    text14: {
      fontSize: 14,
      lineHeight: 16,
      fontFamily: "Poppins_400Regular",
    },
    text12: {
      fontSize: 12,
      lineHeight: 14,
      fontFamily: "Poppins_400Regular",
    },
  },  
  borderRadii: {
    default: 16,
    rounded: 500
  },
});



export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors']
export default theme;