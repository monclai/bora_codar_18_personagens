import Head from "next/head";
import { Source_Sans_Pro } from 'next/font/google';
import { CSSReset } from "../src/CSSReset";

// import IconTab from "../public/assets/icon-logo.svg"

const sourceSansPro = Source_Sans_Pro({
    subsets: ['latin'],
    weight: ['400', '700']
})

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Star Wars - Bora Codar 18 </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="shortcut icon" href="/assets/logo.svg" type="image/x-icon"/> */}
            </Head>
            <div className={sourceSansPro.className}>
                <CSSReset />
                <Component {...pageProps} />
            </div>
        </>
    )
}
