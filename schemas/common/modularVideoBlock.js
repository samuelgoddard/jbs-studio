import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Modular Video',
  type: 'object',
  name: 'modularVideoBlock',
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
        title: 'Full Video Block',
        subtitle: `${video}`
      }
    }
  }
}