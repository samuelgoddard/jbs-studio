export default {
  title: 'Studio',
  name: 'studio',
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
      title: 'Hero Text',
      name: 'heroText',
      type: 'array', 
      of: [{type: 'block'}],
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
      title: 'Content Supporting Image',
      name: 'contentSupportingImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Client List',
      name: 'clientList',
      type: 'array', 
      of: [{type: 'string'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Services List',
      name: 'servicesList',
      type: 'array', 
      of: [{type: 'string'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Team Members',
      name: 'teamMembers',
      type: 'array', 
      of: [{ type: 'teamMember' }]
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