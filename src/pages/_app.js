import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content='width-device-width, initial' />
        <link rel='icon' href="../../public/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-white w-full min-h-screen`} >
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>

  )

}
