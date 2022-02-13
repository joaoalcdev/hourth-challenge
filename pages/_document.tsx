/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App: any) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component: any) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Title */}
          <title> DroplinkFy | Clone Code Challenge </title>
          {/*  Description Tags  */}
          <meta
            property="og:title"
            content="DroplinkFy - Site Oficial"
          ></meta>
          <meta name="instagram:title" content="DroplinkFy"></meta>
          <meta name="youtube:title" content="DroplinkFy"></meta>
          <meta name="facebook:title" content="DroplinkFy"></meta>
          <meta name="twitter:title" content="DroplinkFy"></meta>
          <meta name="linkedin:title" content="DroplinkFy"></meta>
          <link rel="icon" href="/favicon.ico" /> {/* Icon - Website */}
          {/*  Description  */}
          <meta
            name="description"
            content="Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
"
          ></meta>
          <meta
            content="Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
"
          ></meta>
          <meta
            property="og:description"
            content="Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
"
          ></meta>
          <meta
            name="instagram:description"
            content="Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
"
          ></meta>
          <meta
            name="youtube:description"
            content="Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
"
          ></meta>
          <meta
            name="facebook:description"
            content="Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
"
          ></meta>
          <meta
            name="twitter:description"
            content="Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
"
          ></meta>
          <meta
            name="linkedin:description"
            content="Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
"
          ></meta>
          {/*  Site URL  */}
          {/* Links */}
          <link
            rel="canonical"
            href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          />
          <link rel="canonical" href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"></link>
          <meta
            property="og:url"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            name="instagram:site"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            name="youtube:site"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            name="facebook:site"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            name="twitter:site"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            name="linkedin:site"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            property="instagram:url"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            property="youtube:url"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            property="facebook:url"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            property="twitter:url"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          <meta
            property="linkedin:url"
            content="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0"
          ></meta>
          {/*  Theme Color Global */}
          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="msapplication-TileColor" content="#ffffff"></meta>
          <meta name="msapplication-navbutton-color" content="#ffffff"></meta>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#ffffff"
          ></meta>
          {/*  Share Image Size  */}
          <meta property="og:locale" content="pt_BR"></meta>
          <meta property="og:image:type" content="../public/favicon.ico"></meta>
          <meta property="og:image:width" content="1920"></meta>
          <meta property="og:image:height" content="1080"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:card" content="summary_large_image"></meta>
          <meta property="instagram:card" content="summary_large_image"></meta>
          <meta property="youtube:card" content="summary_large_image"></meta>
          <meta property="facebook:card" content="summary_large_image"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="linkedin:card" content="summary_large_image"></meta>
          {/*  Share Image URL  */}
          <meta name="image" content="../public/favicon.ico"></meta>
          <meta name="youtube:image" content="../public/favicon.ico"></meta>
          <meta name="instagram:image" content="../public/favicon.ico"></meta>
          <meta name="facebook:image" content="../public/favicon.ico"></meta>
          <meta name="twitter:image" content="../public/favicon.ico"></meta>
          <meta name="linkedin:image" content="../public/favicon.ico"></meta>
          {/*  Site Name  */}
          <meta name="author" content="DroplinkFy"></meta>
          <meta name="instagram:site" content="DroplinkFy"></meta>
          <meta name="youtube:site" content="DroplinkFy"></meta>
          <meta name="facebook:site" content="DroplinkFy"></meta>
          <meta name="twitter:site" content="DroplinkFy"></meta>
          <meta name="linkedin:site" content="DroplinkFy"></meta>
          <meta name="article:author" content="DroplinkFy"></meta>
          <meta name="application-name" content="DroplinkFy"></meta>
          <meta property="og:site_name" content="DroplinkFy"></meta>
          <meta
            name="apple-mobile-web-app-title"
            content="DroplinkFy"
          ></meta>
          {/*  Favicons  */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="favicon-64x64.webp"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="apple-touch-icon-60x60.webp"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="apple-touch-icon-72x72.webp"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="apple-touch-icon-76x76.webp"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="apple-touch-icon-114x114.webp"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="apple-touch-icon-120x120.webp"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="apple-touch-icon-144x144.webp"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="apple-touch-icon-152x152.webp"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon-180x180.webp"
          ></link>
          <link
            rel="icon"
            type="image/webp"
            sizes="32x32"
            href="favicon-32x32.webp"
          ></link>
          <link
            rel="icon"
            type="image/webp"
            sizes="194x194"
            href="favicon-194x194.webp"
          ></link>
          <link
            rel="icon"
            type="image/webp"
            sizes="192x192"
            href="android-chrome-192x192.webp"
          ></link>
          <link
            rel="icon"
            type="image/webp"
            sizes="16x16"
            href="favicon-16x16.webp"
          ></link>
          <link
            rel="mask-icon"
            href="safari-pinned-tab.svg"
            color="#ffffff"
          ></link>
          <meta
            name="msapplication-TileImage"
            content="mstile-144x144.webp"
          ></meta>
          <meta name="msapplication-config" content="browserconfig.xml"></meta>
          {/*  Manifest  */}
          <link rel="manifest" href="site.webmanifest"></link>
          {/* CSS imports  */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument