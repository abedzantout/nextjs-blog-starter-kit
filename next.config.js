const path = require('path');
const Dotenv = require('dotenv-webpack');

const next_config = {
  swcMinify: true,
  webpack: (config) => {
    config.plugins = config.plugins || [];
    return config;
  }
};

module.exports = { ...next_config };
