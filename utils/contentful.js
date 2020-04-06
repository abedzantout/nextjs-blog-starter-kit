const authorFields = [
  {
    id: 'name',
    name: 'Name',
    type: 'Symbol',
    required: true
  },
  {
    id: 'title',
    name: 'Job Title',
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
    required: false
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
    type: 'Link',
    linkType: 'Asset',
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
    validations: [{ linkContentType: ['author'] }]
  },
  {
    id: 'publishDate',
    name: 'Publish Date',
    type: 'Date',
    required: true
  },
  {
    id: 'tags',
    name: 'Tags',
    type: 'Array',
    required: false,
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['tag'] }]
    }
  }
];

const tagFields = [
  {
    id: 'name',
    name: 'Name',
    type: 'Symbol',
    required: true
  }
];

module.exports = function (migration, context) {
  const tag = migration.createContentType('tag', {
    name: 'Tag',
    description: 'tag',
    displayField: 'name'
  });

  tagFields.forEach((field) => {
    tag.createField(field.id, {
      name: field.name,
      type: field.type,
      required: field.required
    });
  });

  const author = migration.createContentType('author', {
    name: 'Author',
    description: 'Author of Blog post',
    displayField: 'name'
  });

  authorFields.forEach((field) => {
    author.createField(field.id, {
      name: field.name,
      type: field.type,
      required: field.required
    });
  });
  const blog = migration.createContentType('blogPost', {
    name: 'Blog Post',
    description: 'Blog Post',
    displayField: 'title'
  });

  blogFields.forEach((field) => {
    const options = {
      name: field.name,
      type: field.type,
      required: field.required,
      validations: field.validations ? [...field.validations] : []
    };
    if (field.linkType) {
      options.linkType = field.linkType;
    }
    if (field.items) {
      options.items = field.items;
    }
    blog.createField(field.id, options);
  });
};
