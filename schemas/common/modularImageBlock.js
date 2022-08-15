import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Modular Image',
  type: 'object',
  name: 'modularImageBlock',
  icon: FiCamera,
  fields: [
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
      initialValue: 'full-bleed-landscape',
      options: {
        list: [
          { title: 'Full Bleed Landscape', value: 'full-bleed-landscape' },
          { title: 'Contained Landscape', value: 'contained-landscape' },
          { title: 'Contained Portrait', value: 'contained-portrait' },
          { title: 'Contained Square', value: 'contained-square' },
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
      },
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' }
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
      },
      hidden: ({parent}) => (parent?.layout === 'full-bleed-landscape'),
    },
  ],
  preview: {
    select: {
      layout: 'layout'
    },
    prepare(selection) {
      const {layout} = selection
      return {
        title: 'Image Block',
        subtitle: `${layout}`
      }
    }
  }
}