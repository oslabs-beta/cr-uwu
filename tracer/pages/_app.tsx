import '../styles/globals.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme/theme'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import returnStoreAndPersistor from '../state/store'
import Loading from '../components/loading'

function MyApp({ Component, pageProps }: AppProps) {

  const { store, persistor } = returnStoreAndPersistor();

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp