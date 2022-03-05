import '@emotion/react';
import theme from '../src/style/theme';
declare module '@emotion/react' {
  type CustomTheme = typeof theme;
  export interface Theme extends CustomTheme {}
  export interface StyleProps {
    theme: Theme;
  }
}
