import { Box, Container, Flex, Heading, Image, useColorModeValue, Text } from '@chakra-ui/react'
import Section from 'components/section'

const Tools = () => {
    return(
        <Box>
            <Heading my={3}>
                    TOOLS THAT I USE
            </Heading>
            <Heading variant='tools-title'>
                Devices
            </Heading>
            <Flex>
                <Box mx={3} my={1} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3} textAlign='center'>  
                    <Section>
                        <Image mt={2} borderRadius='lg' 
                               alt='mba m2 midnight' 
                               src='https://cdn.mos.cms.futurecdn.net/wt28Bmfr6mdPyoKdZwCkWf.jpg'
                               />
                        <Heading variant='section-title'>
                            <a href='https://www.apple.com/ph/macbook-air-m2/'>Macbook Air M2 [Midnight]</a>
                        </Heading>
                    </Section>
                </Box>
            </Flex>
            <Heading variant='tools-title'>
                    Peripherals
            </Heading>
            <Flex>
                <Box mx={3} my={1} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3} textAlign='center'>  
                    <Section>
                        <Image h={200} w={500} borderRadius='lg' 
                               alt='keychron k3 v2' 
                               src='https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K3-ultra-slim-wireless-mechanical-keyboard--3_1800x1800.jpg?v=1634644047'
                               />
                        <Heading variant='section-title'>
                        <a href='https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard'>Keychron K3 V2</a>
                        </Heading>
                    </Section>
                </Box>
                <Box mx={3} my={2} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3} textAlign='center'>  
                    <Section>
                        <Image mt={2} h={200} w={500} borderRadius='lg' 
                               alt='razer viper pro ult' 
                               src='https://assets3.razerzone.com/6v1RVaYM7gImsVUwGP7AXb6YOcw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh78%2Fh6a%2F9081447088158%2Frazer-viper-ultimate-gallery-hero.jpg'
                               />
                        <Heading variant='section-title'>
                        <a href='https://www.razer.com/gaming-mice/razer-viper-ultimate'>Razer Viper Pro Ultimate</a>
                        </Heading>
                    </Section>
                </Box>
            </Flex>
            <Flex>
                <Box mx={3} my={2} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3} textAlign='center'>  
                    <Section>
                        <Image mt={2} h={200} w={500} borderRadius='lg' 
                               alt='8bitdo' 
                               src='https://images.idgesg.net/images/article/2021/04/dsc07195_final-100886698-large.jpg'
                               />
                        <Heading variant='section-title'>
                        <a href='https://www.8bitdo.com/pro2/'>8Bitdo Pro 2 Controller</a>
                        </Heading>
                    </Section>
                </Box>
                <Box mx={3} my={2} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3} textAlign='center'>  
                    <Section>
                        <Image mt={2} h={200} w={500} borderRadius='lg' 
                               alt='katos' 
                               src='https://images.mmorpg.com/images/heroes/posts/123565.jpg?cb=2E40083E9AACB09D4C80E1FD5AA5E6C0'
                               />
                        <Heading variant='section-title'>
                        <a href='https://moondroplab.com/en/products/kato'>MoonDrop Kato</a>
                        </Heading>
                    </Section>
                </Box>
            </Flex>
            <Heading variant='tools-title'>
                    Accessories
            </Heading>
            <Flex>
                <Box mx={3} my={1} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3} textAlign='center'>  
                    <Section>
                        <Image mt={2} h={200} w={500} borderRadius='lg' 
                               alt='UGREEN Hub' 
                               src='https://cdn.shopify.com/s/files/1/0257/5246/9566/files/5640c170-182e-4eb8-9f84-172a95fa49e3.__CR0_0_970_600_PT0_SX970_V1.jpg?v=1658296590'
                               />
                        <Heading variant='section-title'>
                        <a href='https://www.ugreen.com/collections/usb-hub/products/6-in-1-usb-c-adapter-with-4k-hdmi?variant=39915659722814'>UGREEN 6-in-1 USB Hub</a>
                        </Heading>
                    </Section>
                </Box>
                <Box mx={3} my={2} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3} textAlign='center'>  
                    <Section>
                        <Image mt={2} h={200} w={500} borderRadius='lg' 
                               alt='yes, dont ask' 
                               src='https://m.media-amazon.com/images/I/41agkgDaUJL._AC_UF894,1000_QL80_.jpg'
                               />
                        <Heading variant='section-title'>
                        <a href='https://www.amazon.ca/Wrong-Pick-Girls-Dungeon-Play/dp/B01LWMUULT'>Danmachi Playmat</a>
                        </Heading>
                    </Section>
                </Box>
            </Flex>
        </Box>
    )
}
export default Tools