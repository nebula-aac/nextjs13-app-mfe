import Nav from '@/components/nav'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Nav />
      <Component {...pageProps} />
    </Fragment>
  )
}
