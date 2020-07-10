// next.config.js

const path = require('path');
const Dotenv = require('dotenv-webpack');
const { generateAllArticles } = require('./utils/helpers');

const next_config = {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  },

  exportPathMap: async () => {
    const articles = await generateAllArticles();

    const insights = articles.reduce(
      (pages, entry) =>
        Object.assign({}, pages, {
          [`/post/${entry.slug}`]: {
            page: '/post/[slug]',
            query: { slug: entry.slug }
          }
        }),
      {}
    );

    const pages = {
      '/': { page: '/' }
    };

    return Object.assign({}, pages, insights);
  }
};

module.exports = { ...next_config };
