import Head from 'next/head' 
import Script from 'next/script'

export default function AboutPage() {
    return (
        <div>
            <Head>
                <title>About Page</title>
            </Head>
            <Script 
              id="visitngAbout"
              strategy="lazyOnload">
            {`
            gtag('event', 'screen_view', {
              'app_name': 'losingMyFuckingMind',
              'screen_name': 'About'
            });
            `}
            </Script>
            
            <h1>About Page</h1>
        </div>
    )
}