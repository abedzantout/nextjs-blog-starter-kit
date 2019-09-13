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
    validations: [{ linkContentType: ['Author'] }]
  },
  {
    id: 'publishedDate',
    name: 'Published Date',
    type: 'Date',
    required: true
  }
];

module.exports = function(migration, context) {
  const author = migration.createContentType('Author', {
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
  const blog = migration.createContentType('Blog', {
    name: 'Blog',
    description: 'blogpost'
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
