import slugify from '../utils/slugify'
import { FiUser } from 'react-icons/fi'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  title: "Work",
  name: 'work',
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'category', hidden: false }),
    {
      title: "Title",
      description: "The name of this project",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Category (New)',
      name: 'categoryNew',
      type: 'reference',
      hidden: true,
      to: [{type: 'category'}]
    },
    {
      title: 'Category',
      name: 'categoryMulti',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'category'},
          ]
        }
      ]
    },
    {
      title: 'Category (To Be Deprecated)',
      name: 'category',
      type: 'string',
      hidden: true,
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
      title: "Year",
      description: "The year of this project",
      name: "year",
      type: "string"
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      initialValue: 'still',
      options: {
        list: [
          { title: 'Still', value: 'still' },
          { title: 'Moving', value: 'moving' },
          { title: 'Still & Moving', value: 'still-and-moving' }
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
    // {
    //   name: 'quickViewImages',
    //   type: 'array',
    //   title: 'Quick View Images',
    //   description: 'The array of images that will pop up when the user clicks "Quick View" on this project.',
    //   of: [
    //     {
    //       name: 'image',
    //       type: 'defaultImage',
    //       title: 'Image',
    //     },
    //   ],
    //   options: {
    //     layout: 'grid',
    //   }
    // },
    {
      title: 'Content Blocks',
      name: 'contentBlocks',
      description: 'The modular content blocks for this project',
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