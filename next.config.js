// next.config.js
// const withSourceMaps = require('@zeit/next-source-maps')();
const path = require('path');
const Dotenv = require('dotenv-webpack');
// const {
//     generateAllArticles,
//     generateAllAuthors,
// } = require('./scripts/fetchAllEntities');


module.exports = {
    webpack: config => {

        config.plugins = config.plugins || [];

        config.plugins = [
            ...config.plugins,
            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true,
            }),

        ];

        return config;
    },
    exportPathMap: async () => {
        // const articles = await generateAllArticles();
        // const authors = await generateAllAuthors();
        //
        // const insights = articles.reduce(
        //     (pages, entry) =>
        //         Object.assign({}, pages, {
        //             [`/${entry.slug}`]: {
        //                 page: '/post',
        //                 query: {post: entry.slug},
        //             },
        //         }),
        //     {},
        // );
        //

        const pages = {
            '/': {page: '/'},
        };

        return Object.assign({}, pages);
    },
};

