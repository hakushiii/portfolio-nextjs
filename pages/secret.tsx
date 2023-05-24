import { Box, Container, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ref, onValue, remove } from 'firebase/database'
import  startFirebaseDB from '../src/firebase/FireBaseConf'
import { format } from 'date-fns'
import React from 'react'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const Dynazenon = () => {

    const dateNow = format(new Date(),'yyyy-MM-dd')

    const [half, setHalf] = useState([])
    const [currentDate, setDate] = useState(dateNow)

    const db = startFirebaseDB()
    const readRef = ref(db, currentDate)

    useEffect(() => {
        onValue(readRef, (snapshot) => {
            const data = snapshot.val()

            if (data) {
                const dbData:any = Object.values(data)
                if (dbData.length >= 30) {
                    const slicedData = dbData.slice(-30)
                    setHalf(slicedData)
                } else {
                    setHalf(dbData)
                }
            }
        })
    },[])

    const clearDB = () => {
        remove(ref(db, currentDate))
    }

    return(
    <Box mx={150}>
        <Head>
            <title>HKSH - Dynazenon</title>
        </Head>
        <Heading variant='section-title'>
            <br /><br /><br /><br />
            Dynazenon
        </Heading>
        <Flex justifyContent='center' bg={useColorModeValue('cyan.100','blackAlpha.300')}>
            <Box my={1} borderRadius='lg'>
                LIVE PLOTTING
                <LineChart data={half}>
                    <Line type='linear' dot={false} dataKey='Voltage' stroke={useColorModeValue('cyan.100','blackAlpha.300')} yAxisId='left-axis'/>
                    <Line type='linear' dot={false} dataKey='Current' stroke={useColorModeValue('cyan.100','blackAlpha.300')} yAxisId='right-axis'/>
                    <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
                    <XAxis dataKey='Time' />
                    <YAxis label={{
                        value: 'Voltage',
                        angle: -90,
                        position: 'outsideLeft',
                        style: {fontSize: '20px'} 
                    }} yAxisId='left-axis' />
                    <YAxis label={{
                        value: 'Current',
                        angle: 90,
                        position: 'outsideRight',
                        style: {fontSize: '20px'} 
                    }} yAxisId='right-axis' />
                    <Tooltip />
                </LineChart>
            </Box>
        </Flex>
    </Box>
    )
}
export default Dynazenon