import Layout from 'app.components/Layout/Layout';
import type { AppProps } from 'next/app';
import 'app.styled/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
