import { Container, Box, Heading, useColorModeValue} from "@chakra-ui/react"

const Page=()=> {
  return <Container>
    <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} textAlign='center'>
      Hello, I am Junior Software Developer called HKSH/Z3N_
    </Box>
    
    <Box display={{md:"flex"}}>
      <Box flexGrow={1}>
        <Heading as='h2' variant='page-title'>
          HKSH / Z3N_
        </Heading>
        <p>Computer Engineer / Software Developer</p>
      </Box>
    </Box>
  </Container>
} 

export default Page