import { FiColumns } from 'react-icons/fi'

export default {
  title: 'Modular Image + Text',
  type: 'object',
  name: 'modularImageTextBlock',
  icon: FiColumns,
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'image-right',
      options: {
        list: [
          { title: 'Image Right', value: 'image-right' },
          { title: 'Image Left', value: 'image-left' },
        ],
      },
    },
  ],
  preview: {
    select: {
      layout: 'layout'
    },
    prepare(selection) {
      const {layout} = selection
      return {
        title: 'Image + Text Block',
        subtitle: `${layout}`
      }
    }
  }
}