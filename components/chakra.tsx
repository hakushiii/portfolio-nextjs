import { FC } from 'react'
import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager
  } from '@chakra-ui/react'
  import theme from '../lib/theme'

  type ChakraProps = {
    cookies: string;
    children?: JSX.Element|JSX.Element[];
  }

  type SSPProps = {
    req: any;
  }
  
  export default function Chakra({ cookies, children }: ChakraProps) {
    const colorModeManager =
      typeof cookies === 'string'
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager
  
    return (
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        {children}
      </ChakraProvider>
    )
  }
  
  export async function getServerSideProps({ req }: SSPProps) {
    return {
      props: {
        cookies: req.headers.cookie ?? ''
      }
    }
  }