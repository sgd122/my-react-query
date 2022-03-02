import { DAppProvider, Mainnet } from '@usedapp/core';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppProvider } from 'contexts/App';
import { AxiosProvider } from 'contexts/Axios';
import GlobalStyle from 'styles/global-styles';
import Routes from 'layouts/Routes';
import Suspense from 'components/base/Suspense';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.REACT_MAINNET_URL,
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      // retry: false,
      // staleTime: 5 * 60 * 1000,
      suspense: true,
    },
  },
});

const App = () => {
  return (
    <AppProvider>
      <AxiosProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <DAppProvider config={config}>
              <Suspense>
                <GlobalStyle />
                <Routes />
              </Suspense>
            </DAppProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </AxiosProvider>
    </AppProvider>
  );
};

export default App;
