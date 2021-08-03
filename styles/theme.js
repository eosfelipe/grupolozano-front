import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'

const styles = {
  global: {
    'html, body': {
      background: '#f5f5f5',
      color: '#191919',
      lineHeight: 'tall'
    },
    a: {
      color: '#191919'
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
  initialColorMode: 'light',
  useSystemColorMode: false
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
