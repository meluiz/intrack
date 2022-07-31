import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import theme from '@config/theme'

import { ChakraProvider } from '@chakra-ui/react'

import Application from './__app'

ReactDOM.createRoot(document.getElementById('__app')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
