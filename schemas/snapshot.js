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
      to: [{type: 'category'}]
    },
    {
      title: 'Image',
      name: 'teaserImageThumbnail',
      type: 'defaultImage',
      description: 'The thumbnail of the teaser image used on the work grid (can be landscape or portrait)',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'teaserImageThumbnail'
    }
  }
}