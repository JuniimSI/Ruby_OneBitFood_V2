import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/Header';
import Container from 'react-bootstrap/Container'
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OnebBitFood - v2</title>
        <link ref="icon" href="/favicon.icon"/>
      </Head>

      <main>
        <Header />
        <Container className="mt-5">
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Container>
      </main>
    </>
  )
  
}

export default MyApp
