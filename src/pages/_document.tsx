import { Html, Head, Main, NextScript } from 'next/document'
import { MantineProvider } from '@mantine/core'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
      <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: '30em',
          sm: '48em',
          md: '64em',
          lg: '74em',
          xl: '90em',
        },
      }}
      >
        <Main />
        <NextScript />
      </MantineProvider>
      </body>
    </Html>
  )
}
