import { Author } from './author';

export type Blog = {
  title: string;
  slug: string;
  heroImage: any;
  description: string;
  body: any;
  author: Author;
  publishedDate: Date;
};
