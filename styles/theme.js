import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'

const styles = {
  global: {
    'html, body': {
      background: '#191919',
      color: '#F5F5F5',
      lineHeight: 'tall'
    },
    a: {
      color: '#F5F5F5'
    }
  }
}

const fonts = {
  body: 'Noto Sans JP',
  mono: 'monospace'
}

const fontWeights = {
  light: 100,
  normal: 400,
  bold: 700
}

const colors = {
  dark: '#191919',
  light: '#F5F5F5',
  highlight: '#D01F28'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export const theme = extendTheme({
  styles,
  fonts,
  fontWeights,
  colors,
  config,
  components: {
    Button
  }
})
