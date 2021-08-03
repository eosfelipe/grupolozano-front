import '@fontsource/noto-sans-jp/100.css'
import '@fontsource/noto-sans-jp/400.css'
import '@fontsource/noto-sans-jp/700.css'
import { ChakraProvider, Flex, useBreakpointValue } from '@chakra-ui/react'
import { theme } from '../styles/theme'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex
        className="appLayout"
        flexDirection={'column'}
        py={0}
        px={{ base: '3rem', lg: '2rem', md: '1.5rem', sm: '1rem' }}
      >
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
