import { css, Theme, Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import mergeWith from 'lodash.mergewith';
import defaultTheme from './theme';

const globalStyles = (theme: Theme) => css`
  html {
    box-sizing: border-box;
    font-size: ${theme.fonts.sizes.default}px;
    line-height: ${theme.fonts.lineHeights.default};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${theme.colors.secondary[200]};
  }

  body {
    overflow-x: hidden;
    font-size: ${theme.fonts.sizes.base}px;
    color: ${theme.colors.primary[300]};
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1 {
    font-size: ${theme.toRem(theme.fonts.sizes.h1)};
    line-height: ${theme.toRem(theme.fonts.lineHeights.h1)};
  }

  h2 {
    font-size: ${theme.toRem(theme.fonts.sizes.h2)};
    line-height: ${theme.toRem(theme.fonts.lineHeights.h2)};
  }

  h3 {
    font-size: ${theme.toRem(theme.fonts.sizes.h3)};
    line-height: ${theme.toRem(theme.fonts.lineHeights.h3)};
  }

  h5 {
    font-size: ${theme.toRem(theme.fonts.sizes.h5)};
    line-height: ${theme.toRem(theme.fonts.lineHeights.h5)};
  }

  h6 {
    font-size: ${theme.toRem(theme.fonts.sizes.h6)};
    line-height: ${theme.toRem(theme.fonts.lineHeights.h6)};
  }

  h1,
  h2,
  h5,
  h3,
  h6 {
    font-weight: ${theme.fonts.weight.h};
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
    font-size: ${theme.toRem(theme.fonts.sizes.p1)};
    line-height: ${theme.toRem(theme.fonts.lineHeights.p1)};
    font-weight: ${theme.fonts.weight.p};
  }
`;

const GlobalStyles = ({
  children,
  theme,
}: React.PropsWithChildren<{ theme?: Partial<Theme> }>) => {
  const mergedTheme = mergeWith(defaultTheme, theme || {}) as Theme;
  return (
    <ThemeProvider theme={mergedTheme}>
      <Global styles={globalStyles(mergedTheme)} />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
