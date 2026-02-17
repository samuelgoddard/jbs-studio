export default {
  title: 'Film + Narrative',
  name: 'filmNarrative',
  type: 'document',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Meta Text',
      name: 'heroMetaText',
      type: 'string', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Heading',
      name: 'heroHeading',
      type: 'string', 
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
      title: 'Films',
      name: 'films',
      type: 'array', 
      of: [
        {
          title: 'Film',
          name: 'film',
          type: 'object',
          fields: [
            {
              title: 'Film',
              name: 'film',
              type: 'reference',
              to: [{type: 'work'}],
              description: 'The work reference for this film, will be used to display the film image, title and link',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'defaultImage',
              description: '(Optional) The image to display for this film (will override the reference image above)',
            },
            // {
            //   title: 'Show JBS Icon Badge?',
            //   name: 'showJBSIconBadge',
            //   type: 'boolean', 
            //   description: 'If true, the JBS icon badge will be shown over the the film image',
            //   initialValue: false,
            // },
            // {
            //   title: 'Contain Width?',
            //   name: 'containWidth',
            //   type: 'boolean', 
            //   description: 'If true, the film image will be contained rather than full width',
            //   initialValue: false,
            // },
            {
              title: 'Text',
              name: 'text',
              type: 'array', 
              description: '(Optional) The text to display below the film image',
              of: [{type: 'block'}],
            }
          ],
          preview: {
            select: {
              title: 'film.title',
              media: 'film.teaserImage'
            },
            prepare(selection) {
              const {title, media} = selection
              return {
                title: title,
                media: media
              }
            }
          }
        }
      ]
    },
    {
      title: 'Body Heading',
      name: 'bodyHeading',
      type: 'string', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Body Text',
      name: 'bodyText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Footer Image',
      name: 'heroImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image Grid',
      name: 'imageGrid',
      type: 'array', 
      of: [{type: 'defaultImage'}],
      validation: Rule => Rule.required(),
      options: {
        layout: 'grid',
      }
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