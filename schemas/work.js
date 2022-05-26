import slugify from '../utils/slugify'
import { FiUser } from 'react-icons/fi'

export default {
  title: "Work",
  name: 'work',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this release",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      initialValue: 'drinks',
      options: {
        list: [
          { title: 'Drinks', value: 'drinks' },
          { title: 'Food', value: 'food' },
          { title: 'Lifestyle', value: 'lifestyle' },
        ],
      },
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      initialValue: 'still',
      options: {
        list: [
          { title: 'Still', value: 'still' },
          { title: 'Moving', value: 'moving' }
        ],
      },
    },
    {
      title: "Campaign Title",
      description: "The name of the campaign for this project, eg: 'Ready To Drink Campaign'",
      name: "campaignTitle",
      type: "string"
    },
    {
      title: "Location",
      description: "The location of this project, eg: 'London, UK'",
      name: "location",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Teaser Image',
      name: 'teaserImage',
      type: 'defaultImage',
      description: 'The main teaser image used on the work grid (should always be landscape)',
      validation: Rule => Rule.required()
    },
    {
      title: 'Teaser Image Thumbnail',
      name: 'teaserImageThumbnail',
      type: 'defaultImage',
      description: 'The thumbnail of the teaser image used on the work grid (can be landscape or portrait)',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroCarouselImages',
      type: 'array',
      title: 'Hero Carousel Images',
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
      validation: Rule => Rule.required()
    },
    {
      title: 'Content Blocks',
      name: 'contentBlocks',
      description: 'The modular content blocks for this project',
      type: 'array',
      of: [
        {type: 'modularImageBlock', title: 'Single Image'},
        {type: 'textBlock', title: 'Text'},
        {type: 'imageCarouselBlock', title: 'Image Carousel'},
        {type: 'collectionGridBlock', title: 'Collection Grid'},
        {type: 'modularImageTextBlock', title: 'Image + Text'},
        {type: 'modularDoubleImageBlock', title: 'Double Image'},
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      description: 'Tags for this project, eg: "Set Design", "Motion", "Social" etc',
      type: 'array', 
      of: [{type: 'string'}],
    },
    {
      title: 'Credits',
      name: 'credits',
      description: 'Credits for this project',
      type: 'array', 
      of: [{
        title: 'Credit',
        name: 'credit',
        type: 'object',
        icon: FiUser,
        fields: [
          {
            title: 'Job',
            name: 'job',
            type: 'string',
            description: 'eg: "Set & Styling", "Props / Set Asst',
            validation: Rule => Rule.required()
          },
          {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: 'eg: "Oliver Blackburn"',
            validation: Rule => Rule.required()
          },
        ],
        preview: {
          select: {
            title: 'job',
            subtitle: 'name'
          }
        }
      }],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: (doc) => {
          let titleSlug = ''
          let campaignSlug = ''
          if (doc.title) {
            titleSlug = `${doc.title}`
          } else {
            titleSlug = ''
          }

          if (doc.campaignTitle) {
            campaignSlug = `-${doc.campaignTitle}`
          } else {
            campaignSlug = ''
          }

          return `${titleSlug}${campaignSlug}`;
        },
        maxLength: 96,
        slugify: (input) => slugify(`${input}`)
      },
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
      title: 'title',
      subtitle: 'campaignTitle',
      media: 'teaserImage'
    }
  }
}