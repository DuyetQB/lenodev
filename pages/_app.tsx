import '../styles/globals.css';
import '../styles/tailwind.css';
import type { AppProps } from 'next/app'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
<>
    <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-GGHLEEMKBT`} id="my-script"/>
  <Script strategy='lazyOnload' id="gtm-script">
 {
  `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-GGHLEEMKBT');`
 }
  </Script>
  <Component {...pageProps} />
  </>
  )
  
}
