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
    // {
    //   title: 'Background Image',
    //   name: 'backgroundImage',
    //   type: 'defaultImage',
    //   description: 'The default background image when the user lands on the page',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Email Background Image',
    //   name: 'homeBackgroundImage',
    //   type: 'defaultImage',
    //   description: 'The image that appears when "Email" is hovered',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Work Background Image',
    //   name: 'workBackgroundImage',
    //   type: 'defaultImage',
    //   description: 'The image that appears when "Work" is hovered',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Studio Background Image',
    //   name: 'studioBackgroundImage',
    //   type: 'defaultImage',
    //   description: 'The image that appears when "Studio" is hovered',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Sustainability Background Image',
    //   name: 'sustainabilityBackgroundImage',
    //   type: 'defaultImage',
    //   description: 'The image that appears when "Sustainability" is hovered',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Insta Background Image',
    //   name: 'reelBackgroundImage',
    //   type: 'defaultImage',
    //   description: 'The image that appears when "Insta" is hovered',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Reel Background Image',
    //   name: 'instaBackgroundImage',
    //   type: 'defaultImage',
    //   description: 'The image that appears when "Reel" is hovered',
    //   validation: Rule => Rule.required()
    // },
    {
      title: 'Newsletter Heading',
      name: 'newsletterHeading',
      type: 'string',
      description: 'The heading text for the Newsletter popup',
      validation: Rule => Rule.required()
    },
    {
      title: 'Newsletter Text',
      name: 'newsletterText',
      type: 'text',
      rows: 2,
      description: 'The text text for the Newsletter popup',
      validation: Rule => Rule.required()
    },
    {
      title: 'Newsletter Image',
      name: 'newsletterImage',
      type: 'defaultImage',
      description: 'The image that appears when the newsletter popup is open',
      validation: Rule => Rule.required()
    },
    {
      title: 'Reel URL',
      name: 'reelUrl',
      type: 'url',
      description: 'The URL from Vimeo for the "Reel" popup on both "Menu" and "Home',
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