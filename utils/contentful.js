const authorFields = [
    {
        id: 'name',
        name: 'Name',
        type: 'Symbol',
        required: true
    },
    {
        id: 'title',
        name: 'Title',
        type: 'Symbol',
        required: true
    },
    {
        id: 'company',
        name: 'Company',
        type: 'Symbol',
        required: true
    },
    {
        id: 'shortBio',
        name: 'Short Bio',
        type: 'Text',
        required: true
    },
    {
        id: 'email',
        name: 'Email',
        type: 'Symbol',
        required: true
    },
    {
        id: 'twitter',
        name: 'Twitter',
        type: 'Symbol',
        required: true
    }
];

const blogFields = [
    {
        id: 'title',
        name: 'Title',
        type: 'Symbol',
        required: true
    },
    {
        id: 'slug',
        name: 'Slug',
        type: 'Symbol',
        required: true
    },
    {
        id: 'heroImage',
        name: 'Hero Image',
        type: 'Object',
        required: true
    },
    {
        id: 'description',
        name: 'Description',
        type: 'Text',
        required: true
    },
    {
        id: 'body',
        name: 'Body',
        type: 'Text',
        required: true
    },
    {
        id: 'author',
        name: 'Author',
        type: 'Link',
        required: true,
        linkType: 'Entry',
        validations: [{linkContentType: ['author']}]
    },
    {
        id: 'publishedDate',
        name: 'Published Date',
        type: 'Date',
        required: true
    },
    {
        id: 'tags',
        name: 'Tags',
        type: 'Link',
        required: true,
        linkType: 'Array',
        validations: [{linkContentType: ['tag']}]
    },
];

const tagFields = [
    {
        id: 'name',
        name: 'Name',
        type: 'Symbol',
        required: true
    },
];

module.exports = function (migration, context) {
    const tag = migration.createContentType('tag', {
        name: 'Tag',
        description: 'tag'
    });

    tagFields.forEach(field => {
        tag.createField(field.id, {
            name: field.name,
            type: field.type,
            required: field.required
        });
    });

    const author = migration.createContentType('author', {
        name: 'Author',
        description: 'Author of Blogpost'
    });

    authorFields.forEach(field => {
        author.createField(field.id, {
            name: field.name,
            type: field.type,
            required: field.required
        });
    });
    const blog = migration.createContentType('blogPost', {
        name: 'BlogPost',
        description: 'Blog Post'
    });

    blogFields.forEach(field => {
        if (!field.linkType) {
            blog.createField(field.id, {
                name: field.name,
                type: field.type,
                required: field.required
            });
        } else {
            blog.createField(field.id, {
                name: field.name,
                type: field.type,
                linkType: field.linkType,
                required: field.required,
                validations: field.validations
            });
        }
    });


};
