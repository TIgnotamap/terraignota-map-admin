import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  icon: () => '👤',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activity',
      title: 'Activity',
      type: 'array',
      of: [
        {
          type: 'object',
          options: {columns: 2},
          fields: [
            defineField({
              name: 'es',
              title: 'Español',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'en',
              title: 'English',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'en',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
    },
    prepare(selection) {
      const {firstName, lastName} = selection
      return {
        title: `${firstName} ${lastName}`,
      }
    },
  },
})
