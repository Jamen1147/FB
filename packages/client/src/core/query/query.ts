import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 * 2 } },
});

export default queryClient;
