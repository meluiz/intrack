import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Outfit, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  colors: {
    zinc: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    sky: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    fuchsia: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
  },
  components: {
    Container: {
      variants: { fluid: { height: '100%' } },
    },
    Button: {
      variants: {
        reset: {
          colorScheme: 'transparent',
          widht: 'auto',
          height: 'auto',
          minWidth: 'auto',
          minHeight: 'auto',
          p: 0,
        },
      },
      _focus: { outline: 'none' },
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
