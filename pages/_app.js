import '../styles/globals.css'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Script from 'next/script'

import * as ga from '../lib/google-analytics'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return(
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-ZQJ51F0VLQ`} strategy='afterInteractive' />
      <Script id="google-analytics" strategy='beforeInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZQJ51F0VLQ');
          gtag('event', 'page_view', {
            page_title: 'My Profile',
            page_location: 'https://example.com/me',
            send_to: 'G-ZBYEF8FR2X'
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp