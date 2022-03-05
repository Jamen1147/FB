import { createTheme, ThemeOptions } from '@mui/material';
import { primary, secondary } from './color';
import { toRem } from './utils';

export const htmlFontSize = 10;

const baseTheme: ThemeOptions = {
  typography: {
    htmlFontSize,
    h1: {
      fontWeight: 800,
      fontSize: toRem(72),
      lineHeight: 80,
    },
    h2: {
      fontWeight: 800,
      fontSize: toRem(52),
      lineHeight: 64,
    },
    h3: {
      fontWeight: 800,
      fontSize: toRem(40),
      lineHeight: 56,
    },
    h4: {
      fontWeight: 800,
      fontSize: toRem(30),
      lineHeight: 40,
    },
    h5: {
      fontWeight: 800,
      fontSize: toRem(20),
      lineHeight: 32,
    },
    h6: {
      fontWeight: 800,
      fontSize: toRem(16),
      lineHeight: 24,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: toRem(18),
      lineHeight: 24,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: toRem(16),
      lineHeight: 24,
    },
    body1: {
      fontWeight: 400,
      fontSize: toRem(16),
      lineHeight: 24,
    },
    body2: {
      fontWeight: 400,
      fontSize: toRem(12),
      lineHeight: 24,
    },
    button: {
      fontWeight: 500,
      fontSize: toRem(16),
      lineHeight: 24,
    },
  },
  palette: {
    primary,
    secondary,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 400,
      sm: 690,
      md: 960,
      lg: 1080,
      xl: 1400,
    },
  },
};

const theme = createTheme(baseTheme);

export default theme;
