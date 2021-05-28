import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OnebBitFood - v2</title>
        <link ref="icon" href="/favicon.icon"/>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
  
}

export default MyApp
