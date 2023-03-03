import { FC } from "react"
import { Box, Container, useColorModeValue } from "@chakra-ui/react"
import Script from "next/script"

const TWFeed:FC = () => {
    return (
        <Container>
            <br /><br /><br /><br />
            <Box p={3} w={330} mx={3} borderRadius='lg' bg={useColorModeValue('white','black')}>
                <a className="twitter-timeline" 
                data-width="300" data-height="600" 
                data-theme={useColorModeValue('light','dark')} data-chrome='noscrollbar noborders'
                href="https://twitter.com/hakushiii_">Tweets from hakushiii_</a> 
                <Script async src="https://platform.twitter.com/widgets.js"></Script>
            </Box>
        </Container>
        
    )
}
export default TWFeed