import { FC } from "react"
import { Box, useColorModeValue } from "@chakra-ui/react"
import Script from "next/script"

const TWFeed:FC = () => {

    let boxWidth:number = 300

    return (
        <Box>
            <br /><br /><br /><br />
            <Box p={3} w={boxWidth+20} mx={3} borderRadius='lg' bg={useColorModeValue('white','black')}>
                <a className="twitter-timeline" 
                data-width={boxWidth} data-height="600" 
                data-theme={useColorModeValue('light','dark')} 
                data-chrome='noscrollbar noborders'
                href="https://twitter.com/hakushiii_">Tweets from hakushiii_</a> 
                <Script async src="https://platform.twitter.com/widgets.js"></Script>
            </Box>
        </Box>
    )
}
export default TWFeed