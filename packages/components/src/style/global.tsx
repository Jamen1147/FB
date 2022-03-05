import { css, Theme, Global } from '@emotion/react';
import React from 'react';
import mergeWith from 'lodash.mergewith';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from './theme';

const globalStyles = (theme: Theme) => css`
  html {
    box-sizing: border-box;
    font-size: ${theme.typography.htmlFontSize}px;
    line-height: ${theme.typography.body1.lineHeight};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${theme.palette.secondary.light};
  }

  body {
    overflow-x: hidden;
    font-size: ${theme.typography.htmlFontSize}px;
    color: ${theme.palette.primary.main};
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1 {
    font-size: ${theme.typography.h1.fontSize};
    line-height: ${theme.typography.h1.lineHeight};
  }

  h2 {
    font-size: ${theme.typography.h2.fontSize};
    line-height: ${theme.typography.h2.lineHeight};
  }

  h3 {
    font-size: ${theme.typography.h3.fontSize};
    line-height: ${theme.typography.h3.lineHeight};
  }

  h5 {
    font-size: ${theme.typography.h5.fontSize};
    line-height: ${theme.typography.h5.lineHeight};
  }

  h6 {
    font-size: ${theme.typography.h6.fontSize};
    line-height: ${theme.typography.h6.lineHeight};
  }

  h1,
  h2,
  h5,
  h3,
  h6 {
    font-weight: ${theme.typography.h1.fontWeight};
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
    font-size: ${theme.typography.subtitle1.fontSize};
    line-height: ${theme.typography.subtitle1.lineHeight};
    font-weight: ${theme.typography.subtitle1.fontWeight};
  }
`;

const GlobalStyles = ({
  children,
  theme = {},
}: React.PropsWithChildren<{ theme?: Partial<Theme> }>) => {
  const mergedTheme = mergeWith({}, defaultTheme, theme) as Theme;
  return (
    <ThemeProvider theme={mergedTheme}>
      <Global styles={globalStyles(mergedTheme)} />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
