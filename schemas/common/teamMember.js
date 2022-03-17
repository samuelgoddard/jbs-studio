export default {
  title: 'Team Member',
  name: 'teamMember',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Job Title',
      name: 'jobTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ]
}