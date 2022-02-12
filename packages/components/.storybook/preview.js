import { addDecorator } from '@storybook/react';
import GlobalStyles from '../src/style/global.tsx';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <GlobalStyles>
    <div style={{ padding: '3rem' }}>{story()}</div>
  </GlobalStyles>
));