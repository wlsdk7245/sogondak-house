import type { AppProps } from 'next/app';
import Layout from 'app.components/Layout/Layout';
import 'app.styled/font.css';
import Script from 'next/script';

declare global {
  interface Window {
    naver: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.CLIENT_ID}&submodules=geocoder&callback=initMap`}
      ></Script>
    </>
  );
}
