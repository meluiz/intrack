import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Outfit, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  components: {
    Container: {
      variants: { fluid: { height: '100%' } },
    },
    a: {
      textDecoration: 'none',
      _hover: { textDecoration: 'none' },
      _focus: { outline: 'none' },
    },
    button: { _focus: { outline: 'none' } },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
    '3xl': '112em',
  },
})

export default theme
