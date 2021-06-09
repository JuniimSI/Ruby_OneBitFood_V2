import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OnebBitFood - v2</title>
        <link ref="icon" href="/favicon.icon"/>
      </Head>

      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
  
}

export default MyApp
