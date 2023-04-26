import { Box, Container, Flex, Grid, GridItem, Image, Heading, Text, useColorModeValue, List, ListItem } from '@chakra-ui/react'
import Head from 'next/head'

const Works = () => {
    return(
    <Container>
        <Head>
            <title>HKSH - Works</title>
        </Head>
        <br /><br /><br />
        <Heading variant='works-title'>
                WORKS
        </Heading>
        <Heading variant='works-item'>
            &lt; L I B R A R Y &gt; EBOOK-REPOSITORY
        </Heading>
        <Flex justifyContent='center'>
            <Box my={1} borderRadius='lg' bg={useColorModeValue('cyan.100', 'blackAlpha.300')}>
                <Image borderRadius='lg'
                       alt='library repo'
                       src='/images/library.png'
                        />
                 <Grid templateColumns='repeat(2, 1fr)'>
                  <GridItem>
                    <Box mx={10} p={2} textAlign='center'>
                        <Text variant='work-lang'>LANG used</Text>
                        <List>
                            <ListItem><a href='https://python.org'>Python</a></ListItem>
                            <ListItem><a href='https://javascript.com'>Javascript</a></ListItem>
                        </List>
                    </Box>    
                  </GridItem>
                  <GridItem>
                    <Box mx={10} p={2} textAlign='center'>
                        <Text variant='work-stack'>TECH used</Text>
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
            </Box>    
        </Flex>
    </Container>
    )
}
export default Works