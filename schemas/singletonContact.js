export default {
  title: 'Contact',
  name: 'contact',
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
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array', 
      of: [{
        title: 'Social',
        name: 'social',
        type: 'object',
        fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            title: 'URL',
            name: 'url',
            type: 'string',
            validation: Rule => Rule.required()
          }
        ]
      }],
      validation: Rule => Rule.required()
    },
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