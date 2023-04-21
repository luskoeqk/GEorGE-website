import Head from 'next/head'

// components
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Topnav from '@/components/Header/Topnav'


export default function Home() {


    return (
        <>
            <Head>
                <title>GEorGE</title>
                <link rel="icon" href="/george.ico" />
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <meta name="az197" content="GEorGe Cosmetics" />
                {/* Keywords (specify relevant keywords related to your web page content for SEO): */}
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
                {/* Theme color (specifies the color of the browser's address bar on some mobile devices): */}
                <meta name="theme-color" content="#bf8b00" />
            </Head>

            <Topnav />
            <Header />

            <main>
                <h1>Hello</h1>
            </main>

            <Footer />
        </>
    )
}
