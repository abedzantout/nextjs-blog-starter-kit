import { createClient } from 'contentful';

export const CONTENT_TYPE_BLOGPOST = 'blogPost';
export const CONTENT_TYPE_PERSON = 'author';
export const CONTENT_TYPE_TAGS = 'tag';

const Space = process.env.CONTENTFUL_SPACE;
const Token = process.env.CONTENTFUL_TOKEN;

export class ContentfulService {
    private client = createClient({
        space: Space,
        accessToken: Token,
    });

    async fetchPostBySlug(slug) {
        return await this.client.getEntries({
            content_type: CONTENT_TYPE_BLOGPOST,
            'fields.slug': slug,
        });
    }

    async getAllTags() {
        const content = await this.client.getEntries({
            content_type: CONTENT_TYPE_TAGS,
        });

        const tags = content.items.map(
            ({sys, fields}: { sys: any; fields: any }) => ({
                id: sys.id,
                name: fields.name,
            }),
        );

        return {tags};
    }

    public async getBlogPostEntries(
        {limit, skip, tag}: { limit?: number; skip?: number; tag?: string } = {
            limit: 5,
            skip: 0,
            tag: '',
        },
    ) {
        try {
            const contents = await this.client.getEntries({
                include: 1,
                limit,
                skip,
                order: 'fields.publishDate',
                'fields.tags.sys.id': tag,
                content_type: CONTENT_TYPE_BLOGPOST,
            });

            const entries = contents.items
                .map(({sys, fields}: { sys: any; fields: any }) => ({
                    id: sys.id,
                    title: fields.title,
                    description: fields.description,
                    heroImage: fields.heroImage.fields.file.url,
                    slug: fields.slug,
                    tags: fields.tags,
                    publishedAt: fields.publishDate
                        ? new Date(fields.publishDate)
                        : new Date(sys.createdAt),
                }))

            const total = contents.total;

            return {entries, total, limit, skip};
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
                shortBio: entry.fields.author.fields.shortBio,
            };

            return {
                id: entry.sys.id,
                slug: entry.fields.slug,
                body: entry.fields.body,
                title: entry.fields.title,
                description: entry.fields.description,
                tags: entry.fields.tags,
                heroImage: {url: entry.fields.heroImage.fields.file.url},
                author: {...author, id: entry.fields.author.sys.id},
                publishedAt: entry.fields.publishDate
                    ? new Date(entry.fields.publishDate)
                    : new Date(entry.sys.createdAt),
            };
        } catch (error) {
            console.error(error);
        }
    }

    async fetchSuggestions(tags: string[], currentArticleSlug: string) {


        const limit = 3;
        let entries = [];

        const initialOptions = {
            content_type: CONTENT_TYPE_BLOGPOST,
            limit,
            'fields.tags.sys.id[in]': tags.length ? tags.join(',') : undefined,  // find at least one matching tag, else undefined properties are not copied
            'fields.slug[ne]': currentArticleSlug, // exclude current article
        };

        try {

            const suggestionsByTags = await this.client.getEntries(initialOptions);

            entries = suggestionsByTags.items;
            // number of suggestions by tag is less than the limit
            if (suggestionsByTags.total < limit) {
                // exclude already picked slugs
                const slugsToExclude = [...suggestionsByTags.items].length
                    ? [...suggestionsByTags.items]
                        .map((item: { fields: any }) => item.fields.slug)
                        .join(',')
                    : suggestionsByTags;

                // fetch random suggestions
                const randomSuggestions = await this.client.getEntries({
                    content_type: CONTENT_TYPE_BLOGPOST,
                    limit: limit - suggestionsByTags.total,
                    'fields.tags.sys.id[in]': tags.join(','),  // find at least one matching tag
                    'fields.slug[nin]': slugsToExclude, // exclude slugs already fetched
                });

                entries = [...entries, ...randomSuggestions.items];
            }

            entries = entries
                .map(({sys, fields}: { sys: any; fields: any }) => ({
                    id: sys.id,
                    title: fields.title,
                    description: fields.description,
                    heroImage: fields.heroImage.fields.file.url,
                    slug: fields.slug,
                    tags: fields.tags,
                    publishedAt: fields.publishDate
                        ? new Date(fields.publishDate)
                        : new Date(sys.createdAt),
                }));

            return entries;
        } catch (e) {
            console.error(e);
        }
    }
}
