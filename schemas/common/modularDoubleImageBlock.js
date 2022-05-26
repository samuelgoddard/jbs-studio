import { FiColumns } from 'react-icons/fi'

export default {
  title: 'Modular Double Image Block',
  type: 'object',
  name: 'modularDoubleImageBlock',
  icon: FiColumns,
  fields: [
    {
      title: 'Image 1 (Square)',
      name: 'image1',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image 2 (Portrait)',
      name: 'image2',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'portrait-right',
      options: {
        list: [
          { title: 'Portrait Right', value: 'portrait-right' },
          { title: 'Portrait Left', value: 'portrait-left' },
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
        title: 'Double Image Block',
        subtitle: `${layout}`
      }
    }
  }
}