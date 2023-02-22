import { FC } from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from 'components/footer'

interface MainProps {
    children?: JSX.Element|JSX.Element[];
    router:any;
}

const Main:FC<MainProps> = ({ children, router }) => {
    return(
        <Box as='main' pb={10}>
            <Head>
                <meta name='viewport' content='width=device-width ,initial-scale=1'/>
                <title>HKSH - Homepage</title>
            </Head>
            <Navbar path={router.asPath}/>

                {children}

            <Footer />
        </Box>
    )
}
export default Main