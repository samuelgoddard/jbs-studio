import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  title: "Snapshots",
  name: 'snapshot',
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'category', hidden: true }),
    {
      title: "Title",
      description: "The name of this snapshot",
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
      title: 'Image',
      name: 'teaserImageThumbnail',
      type: 'defaultImage',
      description: 'The thumbnail of the teaser image used on the work grid (can be landscape or portrait)',
      validation: Rule => Rule.required()
    }
    // {
    //   title: 'Work Link (Optional)',
    //   description: "Optionally link this snapshot to a work item",
    //   name: 'workLink',
    //   type: 'reference',
    //   to: [{type: 'work'}]
    // },
    // {
    //   title: "Related Work Year (Optional)",
    //   description: "The year of the campaign this snapshot links to",
    //   name: "year",
    //   type: "string"
    // },
    // {
    //   title: 'Related Work Type (Optional)',
    //   name: 'type',
    //   type: 'string',
    //   initialValue: 'still',
    //   options: {
    //     list: [
    //       { title: 'Still', value: 'still' },
    //       { title: 'Moving', value: 'moving' },
    //       { title: 'Still & Moving', value: 'still-and-moving' }
    //     ],
    //   },
    // },
    // {
    //   title: "Related Work Campaign Title (Optional)",
    //   description: "The name of the campaign this snapshot links to, eg: 'Ready To Drink Campaign'",
    //   name: "campaignTitle",
    //   type: "string"
    // },
    // {
    //   title: "Related Work Location (Optional)",
    //   description: "The location of the project this snapshot links to, eg: 'London, UK'",
    //   name: "location",
    //   type: "string",
    // }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'teaserImageThumbnail'
    }
  }
}