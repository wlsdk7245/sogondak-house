import { GlobalStyle } from 'app.styled';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <title>소곤닥하우스</title>
          <meta
            name="description"
            content="함덕의 소담스러운 돌담집, 소곤닥하우스 | 함덕 해변 숙소"
          />
          <meta property="og:title" content="소곤닥하우스" />
          <meta
            property="og:description"
            content="함덕의 소담스러운 돌담집, 소곤닥하우스"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sogondakhouse.com" />
          <meta name="format-detection" content="no" />
          <meta charSet="utf-8" />
          <meta
            http-equiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Expires" content="0" />
          <link
            href="https://fonts.cdnfonts.com/css/itc-avant-garde-gothic-std-book"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
