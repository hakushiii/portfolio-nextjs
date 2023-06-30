import { Box, Container, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ref, onValue, remove } from 'firebase/database'
import startFirebaseDB from './firebase/FireBaseConf'
import { format } from 'date-fns'
import React from 'react'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const Plotter = () => {

    const date = new Date()
    const dateNow = format(date,'yyyy-MM-dd')

    const [half, setHalf] = useState([])
    const [currentDate] = useState(dateNow)

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
    <Box mx={400}>
        <Head>
            <title>HKSH - Dynazenon</title>
        </Head>
        <Heading variant='section-title'>
            <br /><br /><br /><br />
            Dynazenon
        </Heading>
        <Box borderRadius='lg' bg={useColorModeValue('cyan.100', 'blackAlpha.300')} p={3} mb={6} textAlign='center'>  
                LIVE PLOTTING
            </Box>
            <Box borderRadius='md' bg={useColorModeValue('cyan.100', 'blackAlpha.300')} p={2}>
                <ResponsiveContainer width='100%' height={500}>
                <LineChart data={half}>
                    <Line isAnimationActive={false} type='linear' dot={false} dataKey='Voltage' stroke="#E60002" yAxisId='left-axis'/>
                    <Line isAnimationActive={false} type='linear' dot={false} dataKey='Current' stroke={useColorModeValue('#FFFE33', '#2C75FF')} yAxisId='right-axis'/>
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
                </ResponsiveContainer>
            </Box>
    </Box>
    )
}
export default Plotter