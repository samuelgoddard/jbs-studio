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
          { title: 'Portrait (4:3)', value: 'portrait' },
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
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
          { title: 'Portrait (4:3)', value: 'portrait' },
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
      },
    }
  ],
  preview: {
    select: {
      image1AspectRatio: 'image1AspectRatio',
      image2AspectRatio: 'image2AspectRatio'
    },
    prepare(selection) {
      const {image1AspectRatio, image2AspectRatio} = selection
      return {
        title: 'Double Image Block',
        subtitle: `${image1AspectRatio} / ${image2AspectRatio}`
      }
    }
  }
}