import Head from 'next/head' 
import Script from 'next/script'

export default function AboutPage() {
    return (
        <div>
            <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      
            <Head>
                <title>About Page</title>
                <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');  
        `}
      </Script>
            </Head>
            
            <h1>About Page</h1>
        </div>
    )
}