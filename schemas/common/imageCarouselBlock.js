import { FiLayers } from 'react-icons/fi'

export default {
  title: 'Image Carousel Block',
  type: 'object',
  name: 'imageCarouselBlock',
  icon: FiLayers,
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
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
  ],
  preview: {
    select: {
      images: 'images'
    },
    prepare(selection) {
      const {images} = selection
      return {
        title: 'Image Carousel',
        subtitle: `${images.length} Images`
      }
    }
  }
}