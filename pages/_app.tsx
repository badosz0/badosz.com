import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Badosz</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta name="theme-color" content="#FFFFFF"/>
                <meta name="twitter:card" content="product"/>
                <meta name="twitter:site" content="@badosz_"/>
                <meta name="twitter:title" content="Bartosz Król" key="twitter-title" />
                <meta name="twitter:description" content="Programmer" key="twitter-description"/>
                <meta name="keywords" content="Badosz Salio Programmer MilkScript Code Lua"/>
                <meta name="description" content="Programmer" key="description"/>
                <meta property="og:title" content="Bartosz Król" key="og-title"/>
                <meta property="og:url" content="https://www.badosz.com" />
                <meta property="og:image" content="/images/brand/bIcon-white.png"key="og-image"/>
                <meta property="og:description" content="Programmer" key="og-description"/>
                <link rel="shortcut icon" href="/public/images/brand/bIcon-white.png"></link>
                <link rel="icon" href="/images/brand/bIcon-white.png"></link>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/> 
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&amp;display=swap" rel="stylesheet" />

            </Head>
            <Component {...pageProps} />
        </>
    )
}