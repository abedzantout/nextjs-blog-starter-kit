import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../core/gtag';

type Props = {
  isProduction: boolean;
};
export default class extends Document<Props> {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV.toLowerCase() === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleTags(GA_TRACKING_ID) {
    return {
      __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `
    };
  }

  render() {
    const language = 'en';
    const { isProduction } = this.props;

    return (
      <html lang={language}>
        <Head>
          {/*Global meta tags*/}
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <base href="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              {/* We call the function above to inject the contents of the script tag */}
              <script
                dangerouslySetInnerHTML={this.setGoogleTags(GA_TRACKING_ID)}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
