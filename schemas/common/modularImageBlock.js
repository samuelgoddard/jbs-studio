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
          { title: 'Contained Landscape Center', value: 'contained-landscape' },
          { title: 'Contained Landscape Left', value: 'contained-landscape-left' },
          { title: 'Contained Landscape Right', value: 'contained-landscape-right' },
          { title: 'Contained Portrait Center', value: 'contained-portrait' },
          { title: 'Contained Portrait Left', value: 'contained-portrait-left' },
          { title: 'Contained Portrait Right', value: 'contained-portrait-right' },
          { title: 'Contained Square Center', value: 'contained-square' },
          { title: 'Contained Square Left', value: 'contained-square-left' },
          { title: 'Contained Square Right', value: 'contained-square-right' },
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
        title: 'Image Block',
        subtitle: `${layout}`
      }
    }
  }
}