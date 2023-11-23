export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    // {
    //   title: 'Content',
    //   name: 'content',
    //   type: 'array', 
    //   of: [{type: 'block'}],
    //   validation: Rule => Rule.required()
    // },
    {
      title: 'Header Tagline',
      name: 'headerTagline',
      type: 'string',
      description: 'eg: "A Photography And Motion Studio, London"'
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'defaultImage',
      description: 'The default background image when the user lands on the page',
      validation: Rule => Rule.required()
    },
    {
      title: 'Work Background Image',
      name: 'workBackgroundImage',
      type: 'defaultImage',
      description: 'The image that appears when "Work" is hovered',
      validation: Rule => Rule.required()
    },
    {
      title: 'Studio Background Image',
      name: 'studioBackgroundImage',
      type: 'defaultImage',
      description: 'The image that appears when "Studio" is hovered',
      validation: Rule => Rule.required()
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