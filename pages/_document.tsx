import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <main>
            <NextScript />
          </main>
        </body>
      </html>
    );
  }
}
