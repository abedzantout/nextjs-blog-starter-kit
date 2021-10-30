import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

type Props = {
  isProduction: boolean;
};
export default class extends Document<Props> {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV.toLowerCase() === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  render() {
    const language = 'en';

    return (
      <Html lang={language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
