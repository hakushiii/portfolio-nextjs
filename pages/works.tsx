import { Box, Container, Flex, Image, Heading, useColorModeValue } from '@chakra-ui/react'
import Section from 'components/section'

const Works = () => {
    return(
        <Box>
            <Heading>
                    WORKS
            </Heading>
            <Section>
                <Box mx={3} my={1} borderRadius='lg' bg={useColorModeValue('cyan.100', '#BEBEBE10')} p={3} textAlign='center'>
                    <Image my={2} borderRadius='lg' 
                           alt='library repo'
                           src='/images/library.png'
                    />
                    &lt; L I B R A R Y &gt; EBOOK-REPOSITORY
                </Box>    
            </Section>
        </Box>
    )
}
export default Works