import { Box, Container, Flex, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Section from 'components/section'

const Tools = () => {
    return(
    <Container>
        <Head>
            <title>HKSH - Tools</title>
        </Head>
        <br /><br /><br />
        <Heading variant='tools-title'>
            TOOLS THAT I USE
        </Heading>
        <Heading variant='tools-section'>
            Devices
        </Heading>
        <Flex justifyContent='center'>
            <Box my={1} borderRadius='lg' bg={useColorModeValue('cyan.100', 'blackAlpha.300')}>  
                <Section>
                    <Image borderRadius='lg' 
                           alt='mba m2 midnight' 
                           src='https://cdn.mos.cms.futurecdn.net/wt28Bmfr6mdPyoKdZwCkWf.jpg'
                           />
                    <Heading variant='tools-item'>
                        <a href='https://www.apple.com/ph/macbook-air-m2/'>Macbook Air M2 [Midnight]</a>
                    </Heading>
                </Section>
            </Box>
        </Flex>
        <Heading variant='tools-section'>
            Peripherals
        </Heading>
        <Flex justifyContent='center'>
            <Box mr={3} my={2} borderRadius='lg' bg={useColorModeValue('cyan.100', 'blackAlpha.300')}>  
                <Section>
                    <Image maxHeight={400} borderRadius='lg' 
                           alt='keychron k3 v2' 
                           src='https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K3-ultra-slim-wireless-mechanical-keyboard--3_1800x1800.jpg?v=1634644047'
                           />
                    <Heading variant='tools-item'>
                        <a href='https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard'>Keychron K3 V2</a>
                    </Heading>
                </Section>
            </Box>
            <Box ml={3} my={2} borderRadius='lg' bg={useColorModeValue('cyan.100', 'blackAlpha.300')}>  
                <Section>
                    <Image maxHeight={400} borderRadius='lg' 
                           alt='razer viper pro ult' 
                           src='https://assets3.razerzone.com/6v1RVaYM7gImsVUwGP7AXb6YOcw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh78%2Fh6a%2F9081447088158%2Frazer-viper-ultimate-gallery-hero.jpg'
                           />
                    <Heading variant='tools-item'>
                        <a href='https://www.razer.com/gaming-mice/razer-viper-ultimate'>Razer Viper Pro Ultimate</a>
                    </Heading>
                </Section>
            </Box>
        </Flex>
        <Flex justifyContent='center'>
            <Box borderRadius='lg' bg={useColorModeValue('cyan.100', 'blackAlpha.300')}>  
                <Section>
                    <Image maxHeight={400} borderRadius='lg'
                           alt='katos' 
                           src='https://images.mmorpg.com/images/heroes/posts/123565.jpg?cb=2E40083E9AACB09D4C80E1FD5AA5E6C0'
                           />
                    <Heading variant='tools-item'>
                        <a href='https://moondroplab.com/en/products/kato'>MoonDrop Kato</a>
                    </Heading>
                </Section>
            </Box>
        </Flex>
    </Container>
    )
}
export default Tools