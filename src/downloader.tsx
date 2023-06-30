import { Box, useColorModeValue } from '@chakra-ui/react'

const Downloader = () => {
    return(
        <Box mx={400}>
            <Box borderRadius='lg' bg={useColorModeValue('cyan.100', 'blackAlpha.300')} p={3} mb={-2} textAlign='center'>  
                DOWNLOAD FILES
            </Box>
            <Box bg={useColorModeValue('cyan.100', 'blackAlpha.300')} p={2} height={500}>

            </Box>
        </Box>
    )
} 
export default Downloader