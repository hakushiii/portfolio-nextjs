import Link from 'next/link'
import { Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import HkshIcon from './icons/hksh-logo'

const LogoBox = styled.span
    `
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    > svg {
        transition: 200ms ease;
    }

    &:hover > svg {
        transform: scale(1.1);
    }
    `

const Logo = () => {
    return(
        <Link href='/' scroll={false}>
            <LogoBox>
                <HkshIcon />    
            </LogoBox>
        </Link>
    )
}
export default Logo