export default {
  title: 'Menu',
  name: 'menu',
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
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'defaultImage',
      description: 'The default background image when the user lands on the page',
      validation: Rule => Rule.required()
    },
    {
      title: 'Home Background Image',
      name: 'homeBackgroundImage',
      type: 'defaultImage',
      description: 'The image that appears when "Home" is hovered',
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
      title: 'Reel Background Image',
      name: 'reelBackgroundImage',
      type: 'defaultImage',
      description: 'The image that appears when "Reel" is hovered',
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