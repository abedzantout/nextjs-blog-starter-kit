require('dotenv').config();
const { generateSitemap } = require('./sitemap');
generateSitemap(process.env.PUBLIC_DOMAIN, './out/');
