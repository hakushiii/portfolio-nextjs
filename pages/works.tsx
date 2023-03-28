import { Box, Flex, Grid, GridItem, Image, Heading, Text, useColorModeValue, List, ListItem } from '@chakra-ui/react'
import Head from 'next/head'
import Section from 'components/section'

const Works = () => {
    return(
    <Box mx={300}>
        <Head>
            <title>HKSH - Works</title>
        </Head>
        <Box>
            <br /><br /><br />
            <Heading variant='works-title'>
                    WORKS
            </Heading>
            <Heading variant='works-item'>
                &lt; L I B R A R Y &gt; EBOOK-REPOSITORY
            </Heading>
            <Flex justifyContent='center'>
                <Box my={1} borderRadius='lg' bg={useColorModeValue('cyan.100', 'blackAlpha.300')} p={2}>
                    <Image borderRadius='lg' 
                           alt='library repo'
                           src='/images/library.png'
                    />
                     <Grid templateColumns='repeat(2, 1fr)' px={100}>
                      <GridItem>
                        <Box mx={10} p={2} textAlign='center'>
                            <Text variant='work-lang'>List of LANG used</Text>
                            <List>
                                <ListItem><a href='https://python.org'>Python</a></ListItem>
                                <ListItem><a href='https://javascript.com'>Javascript</a></ListItem>
                            </List>
                        </Box>    
                      </GridItem>
                      <GridItem>
                        <Box mx={10} p={2} textAlign='center'>
                            <Text variant='work-stack'>List of TECH used</Text>
                            <List>
                                <ListItem><a href='https://react.dev'>React</a></ListItem>
                                <ListItem><a href='https://nodejs.org'>Node.js</a></ListItem>
                                <ListItem><a href='https://fastapi.tiangolo.com'>FastAPI</a></ListItem>
                                <ListItem><a href='https://mongodb.com'>MongoDB</a></ListItem>
                                <ListItem><a href='https://railway.org'>Railway</a></ListItem>
                            </List>
                        </Box>
                      </GridItem>
                    </Grid>
                    <Flex alignSelf='center'>
                    </Flex>
                </Box>    
            </Flex>
        </Box>
    </Box>
    )
}
export default Works