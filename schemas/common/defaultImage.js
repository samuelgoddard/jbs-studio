export default {
  title: "Image",
  type: 'image',
  options: {
    hotspot: true,
    metadata: ["lqip"],
  },
  name: "defaultImage",
  fields: [
    {
      title: 'Override Video (Optional)',
      description: 'Optionally override this image with a short video loop (10mb max)',
      name: 'overrideVideo',
      type: 'file'
    },
    {
      title: 'Override Video Aspect Ratio (Optional)',
      description: 'Optionally force overrides the videos aspect ratio',
      name: 'overrideVideoAspectRatio',
      type: 'string',
      options: {
        list: [
          { title: "16/9", value: "169" },
          { title: "9/16", value: "916" },
          { title: "4/5", value: "45" },
          { title: "1/1", value: "11"}
        ],
      },
    },
    {
      title: 'Override Vimeo Video (Optional)',
      description: 'Optionally override this image with a short video from a direct Vimeo URL',
      name: 'overrideVimeoVideo',
      type: 'string'
    },
    {
      title: 'Alternative Text (Optional)',
      description: 'Used by screen readers to describe the image',
      name: 'alt',
      type: 'string'
    },
    {
      title: 'Caption (Optional)',
      description: 'Optional supporting caption',
      name: 'caption',
      type: 'string'
    }
  ]
}