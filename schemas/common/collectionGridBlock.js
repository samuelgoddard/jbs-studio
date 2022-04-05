import { FiGrid } from 'react-icons/fi'

export default {
  title: 'Collection Grid Block',
  type: 'object',
  name: 'collectionGridBlock',
  icon: FiGrid,
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{
        title: 'Item',
        name: 'item',
        type: 'object',
        fields: [{
          title: 'Image',
          name: 'image',
          type: 'defaultImage',
          validation: Rule => Rule.required()
        },{
          title: 'Text',
          name: 'text',
          type: 'string',
          validation: Rule => Rule.required()
        }],
        preview: {
          select: {
            title: 'text',
            media: 'image'
          },
        }
      }],
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      items: 'items'
    },
    prepare(selection) {
      const {items} = selection
      return {
        title: 'Collection Grid',
        subtitle: `${items.length} Items`
      }
    }
  }
}