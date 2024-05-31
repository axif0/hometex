import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Hometex Bangladesh Manufactory</title>
        <meta name="description" content="Adorn your HOME with Style Browse one stop solution of decorative textile products for Home | Hotel | Hospital from our unique selective items. ~ Just Browse & Shop; It's that Simple!" />
        <meta name="keywords" content="Hometex Bangladesh" />
        <link rel="icon" href="/images/hometex-logo.png" type="image/gif" sizes="20x20" />
        {/* Add or modify the viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
