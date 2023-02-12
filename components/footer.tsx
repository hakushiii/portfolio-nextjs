import { Box, Link, useColorModeValue } from "@chakra-ui/react"

const Footer = props => {
    return(
        <Box position='fixed'
        as='foot'
        bottom='0'
        align='center'
        w='100%'
        bg={useColorModeValue('#C7DEFA80','#12121260')}
        style={{backdropFilter:'blur(2px)'}}
        zIndex={1}
        {...props}>
            Originally Made by: <Link color={useColorModeValue('#2b6cb0','teal.200')} href='https://www.craftz.dog/'>Takuya Matsuyama</Link> 
        </Box>

    )
}
export default Footer