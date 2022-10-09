import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Providers from "../providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ChakraProvider>
  )
}

export default MyApp
