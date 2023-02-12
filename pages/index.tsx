import { Container, Box, Heading, useColorModeValue} from '@chakra-ui/react'
import Head from 'next/head'

const Page= () => {
  return <Container>
    <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} textAlign='center'>  
      01001000 01001011 01010011 01001000
    </Box>
    
    <Box display={{md:'flex'}}>
      <Box flexGrow={1}>
        <Heading as='h2' variant='page-title'>
          Jerome A.
        </Heading>
        Computer Engineer / Software Developer
      </Box>
    </Box>
  </Container>
} 

export default Page