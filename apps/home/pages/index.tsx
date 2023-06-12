import Container from "@/components/container/container";
import Hero from "@/components/sections/hero/hero";
import Main from "@/components/sections/main/main";
import { Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Fragment } from "react";

/*
let useHook
if (typeof window !== "undefined") {
  useHook = require('shop/useCustomHook').default
}
*/

const RemoteTitle = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    const mod = import('checkout/title').catch(console.error)
    return mod
  },
  {
    suspense: true,
    ssr: false
  }
)

export default function Home() {
  return (
    <Fragment>
      <Container height={"100vh"}>
        <Hero />
        <Main>
          <Text color="text">
            To get started, edit <code>pages/index.tsx</code>. Save to reload.
          </Text>
        </Main>
      </Container>
    </Fragment>
  )
}