import { ContentfulCollection, createClient } from 'contentful';

const Space = process.env.CONTENTFUL_SPACE;
const Token = process.env.CONTENTFUL_TOKEN;

const client = createClient({
  space: Space,
  accessToken: Token
});
