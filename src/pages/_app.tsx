import { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { useEffect, useRef } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ThemeProvider } from 'styled-components';

import Default from '@layouts/Default';

import GlobalStyle from '@themes/global-style';
import theme from '@themes/index';

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          maxSnack={5}
        >
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Default>
              <Component {...pageProps} />
            </Default>
          </ThemeProvider>
        </SnackbarProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
