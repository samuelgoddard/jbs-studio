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
    // {
    //   title: 'Hero Text',
    //   name: 'heroText',
    //   type: 'array', 
    //   of: [{type: 'block'}],
    //   validation: Rule => Rule.required()
    // },
    {
      title: 'Content',
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'contentSupportingImages',
      type: 'array',
      title: 'Content Supporting Images',
      description: 'The array of images the flick on the left as you scroll',
      of: [
        {
          name: 'image',
          type: 'defaultImage',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.required().min(12).max(12)
    },
    {
      title: 'Pullout Text',
      name: 'pulloutText',
      type: 'text', 
      rows: 4
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
      title: 'Content Blocks',
      name: 'contentBlocks',
      description: 'The modular content blocks for the studio page',
      type: 'array',
      of: [
        {type: 'modularImageBlock', title: 'Single Image'},
        {type: 'modularVideoBlock', title: 'Full Video Block'},
        {type: 'modularVideoBlockSquare', title: 'Full Video Block (Square)'},
        {type: 'textBlock', title: 'Text'},
        {type: 'imageCarouselBlock', title: 'Image Carousel'},
        {type: 'collectionGridBlock', title: 'Collection Grid'},
        // {type: 'modularImageTextBlock', title: 'Image + Text'},
        {type: 'modularDoubleImageBlock', title: 'Double Image'},
        {type: 'modularSideBySideImageBlock', title: 'Side By Side Portrait Image'},
      ],
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