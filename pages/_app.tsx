import App from 'next/app';
import React from 'react';
import Router from 'next/router';

import { trackPageView } from '../core/gtag';

Router.events.on('routeChangeComplete', url => trackPageView(url));

export default App
