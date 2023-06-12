import LandingLayout from '@/components/layouts/LandingLayout'
import theme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      </ChakraProvider>
    </Fragment>
  )
}
