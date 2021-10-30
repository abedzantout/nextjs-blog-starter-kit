import React, { useEffect } from 'react';
import Script from 'next/script';

import './styles.scss';
import './home.scss';
import { useRouter } from 'next/router';
import { trackPageView, GA_TRACKING_ID } from '../core/gtag';
import Footer from '../shared/components/footer/footer.component';
import Header from '../shared/components/header/header.component';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const isProduction = process.env.NODE_ENV.toLowerCase() === 'production';

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {isProduction && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </>
      )}

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
