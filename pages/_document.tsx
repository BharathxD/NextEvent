import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Main />
        <body>
          <Head />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
