require('dotenv').config();
const { generateSitemap } = require('./sitemap');
generateSitemap('https://www.techhive.io', './out/');
