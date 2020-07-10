import App from 'next/app';
import React from 'react';
import Router from 'next/router';

import './styles.css';
import './home.css';

import { trackPageView } from '../core/gtag';
import Footer from '../shared/components/footer/footer.component';
import Header from '../shared/components/header/header.component';

Router.events.on('routeChangeComplete', (url) => trackPageView(url));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MyApp;
