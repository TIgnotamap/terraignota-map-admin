import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        defineField({
          name: 'es',
          title: 'Español',
          type: 'string',
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description: 'Optional short (100 char max) description of the tag',
      type: 'object',
      fields: [
        defineField({
          name: 'es',
          title: 'Español',
          type: 'text',
          validation: (rule) => rule.max(200),
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'text',
          validation: (rule) => rule.max(200),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
    },
  },
})
