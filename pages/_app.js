import Head from 'next/head'
import '@fontsource/noto-sans-jp/100.css'
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Flex className="appLayout" flexDirection={'column'} py={0}>
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
