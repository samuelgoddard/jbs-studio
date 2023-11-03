export default {
  title: 'Sustainability',
  name: 'sustainability',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Commitments',
      name: 'commitments',
      type: 'array', 
      of: [{
        title: 'Commitment',
        name: 'commitment',
        type: 'object',
        fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'EG: "Green investment"',
            validation: Rule => Rule.required()
          },
          {
            title: 'Text',
            name: 'text',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.required()
          },
          {
            title: 'Image',
            name: 'image',
            type: 'defaultImage',
            validation: Rule => Rule.required()
          },
        ],
        preview: {
          select: {
            title: 'title',
            media: 'image'
          }
        }
      }]
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}