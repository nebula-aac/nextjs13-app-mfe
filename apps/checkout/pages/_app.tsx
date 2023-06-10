import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

const Nav = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    const mod = import('home/nav').catch(console.error)
    return mod
  },
  {
    ssr: false,
    suspense: true
  }
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Nav />
      <Component {...pageProps} />
    </Fragment>
  )
}