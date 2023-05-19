import type { AppProps } from 'next/app';
import Layout from 'app.components/Layout/Layout';
import 'app.styled/font.css';
import Script from 'next/script';
import Head from 'next/head';

declare global {
  interface Window {
    naver: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>소곤닥하우스</title>
        <meta
          name="description"
          content="함덕의 소담스러운 돌담집, 소곤닥하우스"
        />
      </Head>
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
