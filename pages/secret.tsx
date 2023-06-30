import { Box } from '@chakra-ui/react'
import Head from 'next/head'

import Plotter from 'src/plotter'
import Downloader from 'src/downloader'

const Dynazenon = () => {
    return(
        <Box>
            <Head>
                <title>HKSH - Dynazenon</title>
            </Head>
            <Plotter />
            <Downloader />
        </Box>
    )

}
export default Dynazenon