import '@/styles/globals.scss'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TopMargin from '@/components/TopMargin'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>The Sharkk Co. - Your Online Shoppers Stop</title>
      <meta name="description" content="Your Online Shoppers Stop!" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/fav.png" />
    </Head>
    <Navbar />
    <TopMargin />
    <Component {...pageProps} />
    <Footer />
  </>
}
