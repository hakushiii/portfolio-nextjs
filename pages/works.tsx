import { Box, Container, Flex, Image, Heading, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Section from 'components/section'

const Works = () => {
    return(
    <Box mx={300}>
        <Head>
            <title>HKSH - Works</title>
        </Head>
        <Box >
            <br /><br /><br />
            <Heading variant='works-title'>
                    WORKS
            </Heading>
            <Heading variant='works-item'>
                &lt; L I B R A R Y &gt; EBOOK-REPOSITORY
            </Heading>
            <Flex justifyContent='center'>
            <Section>
                <Box my={1} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3}>
                    <Image h={400} my={1} borderRadius='lg' 
                           alt='library repo'
                           src='/images/library.png'
                    />
                </Box>    
            </Section>
            </Flex>
        </Box>
    </Box>
    )
}
export default Works