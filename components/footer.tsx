import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react"

const Footer = props => {
    return(
        <Box
        mt={18}
        bottom='0'
        align='center'
        w='100%'
        style={{backdropFilter:'blur(2px)'}}
        zIndex={1}
        {...props}>
            <Text color='gray'><Link color={useColorModeValue('#2b6cb0','teal.200')} href='https://www.youtube.com/watch?v=bSMZgXzC9AA'>Portfolio</Link> Originally Made by: <Link color={useColorModeValue('#2b6cb0','teal.200')} href='https://www.craftz.dog/'>Takuya Matsuyama</Link></Text>
        </Box>

    )
}
export default Footer