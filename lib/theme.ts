import { FC } from 'react'
import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
    global: (props: Record<string, any> | StyleFunctionProps) => ({
        body: {
            bg: mode('#D8F0FA', '#121212')(props)
        }
    })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textAlign: '',
        textDecoration: 'underline',
        fontSize: 24,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'tools-title':{
        textAlign: '',
        textDecoration: 'underline',
        fontSize: 24,
        textUnderlineOffset: 6,
        textDecorationColor: '#5D3FD3',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 1
      },
      'tools-section': {
        textAlign: 'center',
        textDecoration: 'bold',
        fontSize: 22,
        textUnderlineOffset: 6,
        textDecorationColor: '#5D3FD3',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 1
      },
      'tools-item': {
        textAlign: 'center',
        textDecoration: '',
        fontSize: 18,
        textUnderlineOffset: 6,
        textDecorationColor: '#ff8800',
        textDecorationThickness: 4,
        marginTop: 5,
        marginBottom: 0
      },
      'works-title': {
        textAlign: '',
        textDecoration: 'underline',
        fontSize: 24,
        textUnderlineOffset: 6,
        textDecorationColor: '#ff8800',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 1
      },
      'works-item': {
        textAlign: 'center',
        textDecoration: '',
        fontSize: 18,
        textUnderlineOffset: 6,
        textDecorationColor: '#ff8800',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 1
      }
    }
  },
  Link: {
    baseStyle: (props: Record<string, any> | StyleFunctionProps) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}
  
const fonts = {
  heading: '"Oswald"'
}

const colors = {
  gowon: '#41c9a9'
  
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}
const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme