require('dotenv').config();
const { generateSitemap } = require('./sitemap');
generateSitemap(process.env.DOMAIN_NAME, './out/');
