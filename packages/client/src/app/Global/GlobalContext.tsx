import { QueryClientProvider } from 'react-query';
import { GlobalStyles } from '@fb/components';
import { PropsWithChildren } from 'react';
import queryClient from '../../core/query/query';

const GlobalContext = ({ children }: PropsWithChildren<{}>) => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyles>{children}</GlobalStyles>
  </QueryClientProvider>
);

export default GlobalContext;
