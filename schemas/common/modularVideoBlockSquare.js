import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Modular Video (Square)',
  type: 'object',
  name: 'modularVideoBlockSquare',
  icon: FiCamera,
  fields: [
    {
      title: 'Video',
      name: 'video',
      type: 'string',
      description: 'The Video URL from Vimeo',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      video: 'video'
    },
    prepare(selection) {
      const {video} = selection
      return {
        title: 'Full Video Block (Square)',
        subtitle: `${video}`
      }
    }
  }
}