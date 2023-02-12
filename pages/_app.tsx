import Chakra from 'components/chakra'
import Fonts from 'components/fonts'
import Layout from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) => {
  return(
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <Fonts />
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  )
}
export default Website