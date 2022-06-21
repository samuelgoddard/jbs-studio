import { FiColumns } from 'react-icons/fi'

export default {
  title: 'Modular Double Image Block',
  type: 'object',
  name: 'modularDoubleImageBlock',
  icon: FiColumns,
  fields: [
    {
      title: 'Image 1',
      name: 'image1',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image 1 Aspect Ratio',
      name: 'image1AspectRatio',
      type: 'string',
      initialValue: 'square',
      options: {
        list: [
          { title: 'Square', value: 'square' },
          { title: 'Portrait', value: 'portrait' },
        ],
      },
    },
    {
      title: 'Image 2',
      name: 'image2',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image 2 Aspect Ratio',
      name: 'image2AspectRatio',
      type: 'string',
      initialValue: 'portrait',
      options: {
        list: [
          { title: 'Square', value: 'square' },
          { title: 'Portrait', value: 'portrait' },
        ],
      },
    },
    {
      title: 'Reverse Order',
      name: 'reverseOrder',
      type: 'boolean',
      description: 'Toggling this on will reverse the order of the images.'
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