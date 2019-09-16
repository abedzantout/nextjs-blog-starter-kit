import { ContentfulCollection, createClient } from 'contentful';

export const CONTENT_TYPE_BLOGPOST = 'blogPost';
export const CONTENT_TYPE_PERSON = 'person';

const Space = process.env.CONTENTFUL_SPACE;
const Token = process.env.CONTENTFUL_TOKEN;

const client = createClient({
  space: Space,
  accessToken: Token
});

async function fetchAuthorBySlug(slug) {
  return await client.getEntries({
    content_type: CONTENT_TYPE_PERSON,
    'fields.slug': slug
  });
}

async function fetchPostBySlug(slug) {
  return await client.getEntries({
    content_type: CONTENT_TYPE_BLOGPOST,
    'fields.slug': slug
  });
}

export async function getBlogPostEntries() {
  try {
    const contents = await client.getEntries({
      include: 1,
      content_type: CONTENT_TYPE_BLOGPOST
    });

    return contents.items
      .map(({ sys, fields }: { sys: any; fields: any }) => ({
        id: sys.id,
        title: fields.title,
        description: fields.description,
        heroImage: fields.heroImage.fields.file.url,
        slug: fields.slug,
        tags: fields.tags,
        publishedAt: fields.publishedAt
          ? new Date(`${fields.publishedAt}Z`)
          : new Date(`${sys.createdAt}Z`)
      }))
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  } catch (error) {
    // TODO: add error handling
    console.log(error);
  }
}

export function getPostBySlug(slug) {
  return fetchPostBySlug(slug)
    .then((entries: ContentfulCollection<any>) => {
      if (entries.items.length) {
        const content: { sys: any; fields: any } = entries.items[0];

        const author = {
          name: content.fields.author.fields.name,
          title: content.fields.author.fields.title,
          slug: content.fields.author.fields.slug,
          image: content.fields.author.fields.image.fields.file.url
        };

        return {
          id: content.sys.id,
          slug: content.fields.slug,
          body: content.fields.body,
          title: content.fields.title,
          description: content.fields.description,
          heroImage: { url: content.fields.heroImage.fields.file.url },
          author: { ...author, id: content.fields.author.sys.id },
          publishedAt: content.fields.publishDate
            ? new Date(content.fields.publishDate)
            : new Date(content.sys.createdAt)
        };
      }
    })
    .catch(err => null);
}
