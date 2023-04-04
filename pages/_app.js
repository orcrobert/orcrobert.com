import '@/styles/globals.css'
import { ThemeProvider, theme, ColorModeProvider, CSSReset, ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <ThemeProvider theme={theme}> 
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}
