import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/montserrat/fontface.css" rel="stylesheet" />
          <link href="/fonts/notosans/fontface.css" rel="stylesheet" />

          <link
            rel="preload"
            href="/fonts/montserrat/Montserrat-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/notosans/NotoSans-BoldItalic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/notosans/NotoSans-Italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/notosans/NotoSans.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/notosans/NotoSans-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          {/* Google Tag Manager */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-KP8ZR4Q');`,
                }}
              />
              <meta
                name="facebook-domain-verification"
                content="htku1k2kxuypzdnk2phz8ihtw2o6r4"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window._peq = window._peq || []; window._peq.push(["init"]);`
                }}
              />
              <script src="https://clientcdn.pushengage.com/core/739f386d-a634-4a0b-ba1a-d72621420b42.js" async></script>
            </>
          )}
          {/* RD Marketing */}
          {process.env.NODE_ENV === 'production' && (
            <script
              type="text/javascript"
              async
              src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/2ccde480-613b-486f-ac94-ff4edf0d91ff-loader.js"
            ></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <>
              <noscript
                dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP8ZR4Q" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
              />
              <script
                id="ze-snippet"
                src="https://static.zdassets.com/ekr/snippet.js?key=09c31cf2-a61a-4a6c-8442-10e375580d13"
              ></script>
            </>
          )}
        </body>
      </Html>
    );
  }
}
