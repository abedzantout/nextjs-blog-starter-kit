import { createClient } from 'contentful';

export const CONTENT_TYPE_BLOGPOST = 'blogPost';
export const CONTENT_TYPE_PERSON = 'author';
export const CONTENT_TYPE_TAGS = 'tag';

const Space = process.env.CONTENTFUL_SPACE;
const Token = process.env.CONTENTFUL_TOKEN;

export class ContentfulService {
  private client = createClient({
    space: Space,
    accessToken: Token
  });

  async fetchPostBySlug(slug) {
    return await this.client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      'fields.slug': slug
    });
  }

  async getAllTags() {
    const content = await this.client.getEntries({
      content_type: CONTENT_TYPE_TAGS
    });

    const tags = content.items.map(
      ({ sys, fields }: { sys: any; fields: any }) => ({
        id: sys.id,
        name: fields.name
      })
    );

    return { tags };
  }

  public async getBlogPostEntries(
    { limit, skip, tag }: { limit?: number; skip?: number; tag?: string } = {
      limit: 5,
      skip: 0,
      tag: ''
    }
  ) {
    try {
      const contents = await this.client.getEntries({
        include: 1,
        limit,
        skip,
        order: 'fields.publishDate',
        'fields.tags.sys.id': tag,
        content_type: CONTENT_TYPE_BLOGPOST
      });

      const entries = contents.items
        .map(({ sys, fields }: { sys: any; fields: any }) => ({
          id: sys.id,
          title: fields.title,
          description: fields.description,
          heroImage: fields.heroImage.fields.file.url,
          slug: fields.slug,
          tags: fields.tags,
          publishedAt: fields.publishDate
            ? new Date(fields.publishDate)
            : new Date(sys.createdAt)
        }))
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );

      const total = contents.total;

      return { entries, total, limit, skip };
    } catch (error) {
      // TODO: add error handling
      console.log(error);
    }
  }

  async getPostBySlug(slug) {
    try {
      const content: any = await this.fetchPostBySlug(slug);

      const entry: { sys: any; fields: any } = content.items[0];

      const author = {
        name: entry.fields.author.fields.name,
        title: entry.fields.author.fields.title,
        company: entry.fields.author.fields.company,
        shortBio: entry.fields.author.fields.shortBio
      };

      return {
        id: entry.sys.id,
        slug: entry.fields.slug,
        body: entry.fields.body,
        title: entry.fields.title,
        description: entry.fields.description,
        heroImage: { url: entry.fields.heroImage.fields.file.url },
        author: { ...author, id: entry.fields.author.sys.id },
        publishedAt: entry.fields.publishDate
          ? new Date(entry.fields.publishDate)
          : new Date(entry.sys.createdAt)
      };
    } catch (error) {
      console.error(error);
    }
  }
}
