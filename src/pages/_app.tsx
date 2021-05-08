import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import { Layout } from "./components/Layout"
import { Favicon } from "./components/Favicon"


function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <Favicon/>
    <Head>
      <title>Chakratter</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
}

export default MyApp
