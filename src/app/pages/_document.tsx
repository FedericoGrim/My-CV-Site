import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/images/MyLogo.png" />
          <meta name="description" content="Descrizione del tuo sito" />
          <meta property="og:image" content="URL dell'immagine per l'anteprima sui social media" />
          <meta name="og:title" content="Titolo del tuo sito" />
          <meta name="twitter:card" content="summary_large_image" />
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
