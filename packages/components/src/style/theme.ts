import { primary, secondary } from './color';
import { breakpoint, spacing, toRem, rgba } from './utils';

export const htmlSize = 10;

const theme = {
  fonts: {
    weight: {
      default: 400,
      title: 700,
      base: 400,
      label: 600,
      lightLabel: 500,
      h: 800,
      p: 400,
    },
    sizes: {
      default: htmlSize,
      title: 18,
      base: 16,
      label: 12,
      h1: 72,
      h2: 52,
      h3: 40,
      h5: 20,
      h6: 16,
      p1: 20,
    },
    lineHeights: {
      default: 1.35,
      h1: 80,
      h2: 64,
      h3: 56,
      h5: 32,
      h6: 24,
      p1: 32,
    },
  },
  colors: {
    primary,
    secondary,
  },
  breakpoint,
  spacing,
  toRem,
  rgba,
};

export default theme;
