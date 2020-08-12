[![Netlify Status](https://api.netlify.com/api/v1/badges/12ca189b-a0ff-4947-9749-a52bb521006f/deploy-status)](https://app.netlify.com/sites/nextjs-static-starter-kit/deploys)

<p align="left">
  <a href="https://techhive.io/" target="blank"><img src="https://www.techhive.io/static/brand/logo-masterclass.svg" width="250" alt="Nest Logo" /></a>
</p>

# Next JS Static starter-kit

by [@techhive.IO](https://www.techhive.io/)

## Table of Content

- [Live Demo](https://nextjs-static-starter-kit.netlify.com/)
- [Getting Started](#setting-started)
- [Useful Commands](#useful-commands)
- [Goals](#goals)
- [Features](#features)
- [Learning Materials](#learning-materials)
- [Bugs](#bugs)
- [Contributors](#contributors)
- [License](#license)

## Getting Started

```bash
git clone --depth 1 https://github.com/techhiveIO/nextjs-blog-starter-kit my-project
cd my-project
rm -r .git
cp .env.example .env
npm run dev
```

Make sure you enter the correct values in your `.env` file:

```
CONTENTFUL_SPACE=<your contentful space>
CONTENTFUL_TOKEN=<your contentful token>
PUBLIC_DOMAIN=<your domain name>
```

## Useful Commands

- `dev` - start application in development mode
- `build` - build application in production mode
- `start` - start application in production mode
- `export` - build and export application into a static website
- `postexport` - runs the post-export.js script, creates the sitemap.xml
- `type-check`- type checking for typescript
- `format:write` - runs prettier to format whole code base (`.ts` and `.css`)
- `lint` - lints project using eslint,
- `populate:contentful` - populates Contentful CMS

## Goals

Developers often want a good starting point when implementing a new website.
With this starter kit, the developer can implement a new blog, or use it as a
inspiration to build any static website using NextJS.

## Features

- Next.Js with Typescript support out of the box
- Static Export out of the box
- Contentful Integration with scripts to automatically populate your CMS
- Easy integration and Deployment over Netlify and Vercel (formerly ZEIT) 
- Custom components
- SEO friendly, with dynamic meta tags
- Google Analytics
- Optimized for speed and scalability
- Relevant Suggestions for every blog post

## Stack

- [Next.Js (V9+)](https://github.com/zeit/next.js)
- Typescript
- [Netlify](https://www.netlify.com)
- [Contentful](https://www.contentful.com)

## Learning Materials

[How to build a powerful blog with NextJS and Contentful](https://www.techhive.io/our-insights/how-to-build-a-powerful-blog-with-nextjs-and-contentful)

[Making your blog smarter - How to implement suggestions](https://www.techhive.io/our-insights/making-your-blog-smarter-how-to-implement-suggestions)

## Bugs

Please make sure you fill in the appropriate fields when submitting an issue. Our team will
try to resolve it as soon as possible

## Contributors

Want to start contributing to open source with Next.Js ?

Leave your mark and join the growing team of contributors!

Get started by checking out list of [open issues](https://github.com/techhiveIO/nextjs-static-starter-kit/issues)
and reading [Contributor Guide](https://github.com/techhiveIO/nextjs-static-starter-kit/blob/master/CONTRIBUTING.md)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/abedzantout"><img src="https://avatars3.githubusercontent.com/u/4046627?v=4" width="100px;" alt="Abdul Rahman Zantout"/><br /><sub><b>Abdul Rahman Zantout</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=abedzantout" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=abedzantout" title="Documentation">📖</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=abedzantout" title="Tests">⚠️</a> <a href="#design-abedzantout" title="Design">🎨</a> <a href="#blog-abedzantout" title="Blogposts">📝</a></td>
    <td align="center"><a href="https://github.com/aliobaji"><img src="https://avatars0.githubusercontent.com/u/17101112?s=400&v=4" width="100px;" alt="Ali El-Obaji"/><br /><sub><b>Ali El-Obaji</b></sub></a><br /><a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=aliobaji" title="Code">💻</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=aliobaji" title="Documentation">📖</a> <a href="https://github.com/tomastrajan/angular-ngrx-material-starter/commits?author=aliobaji" title="Tests">⚠️</a> <a href="#design-aliobaji" title="Design">🎨</a> <a href="#blog-aliobaji" title="Blogposts">📝</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

NextJS Static Starter is © 2020 Techhive.IO LLC . It is distributed under the [Creative Commons
Attribution License](http://creativecommons.org/licenses/by/4.0/).

The names and logos for techhive.io are trademarks of techhive.io LLC.
