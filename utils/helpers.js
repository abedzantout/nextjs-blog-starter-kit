const { createClient } = require('contentful');
require('dotenv').config();

const Space = process.env.CONTENTFUL_SPACE;
const Token = process.env.CONTENTFUL_TOKEN;

const client = createClient({
  space: Space,
  accessToken: Token
});

const CONTENT_TYPE_BLOGPOST = 'blogPost';
const CONTENT_TYPE_PERSON = 'person';

const getAllAuthors = async () => {
  return await client.getEntries({
    content_type: CONTENT_TYPE_PERSON,
    select: 'fields.name,fields.slug'
  });
};

const getAllArticles = async () => {
  return await client.getEntries({
    content_type: CONTENT_TYPE_BLOGPOST,
    select: 'fields.title,fields.slug'
  });
};
exports.generateAllAuthors = async () => {
  const authors = await getAllAuthors();
  return authors.items.map((item) => ({ ...item.fields }));
};

exports.generateAllArticles = async () => {
  const articles = await getAllArticles();
  return articles.items.map((item) => ({ ...item.fields }));
};
