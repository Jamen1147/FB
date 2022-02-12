import { css } from '@emotion/react';
import breakpoints, { ScreenSize } from './breakpoint';
import { htmlSize } from './theme';

const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const hexCode = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexCode);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex?: string, alpha = 1) => {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  const rgb = hexToRgb(hex);
  if (rgb) {
    const { r, g, b } = rgb;
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return `rgba(0,0,0,${alpha})`;
};

export const breakpoint = (direction: 'up' | 'down', size: ScreenSize) =>
  `@media (${direction === 'up' ? 'min' : 'max'}-width: ${
    breakpoints[size]
  }px)`;

export const spacing = (n: number) => `${(n * (8 / htmlSize)).toFixed(2)}rem`;

export const toRem = (px: number) => `${(px / htmlSize).toFixed(2)}rem`;

export const lineClamp = (lines: number) => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  height: auto;
`;
