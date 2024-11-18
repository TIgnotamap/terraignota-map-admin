import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'organization',
  title: 'Organization',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      options: {columns: 2},
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'info',
      title: 'Info',
      type: 'object',
      options: {columns: 2},
      fields: [
        defineField({
          name: 'es',
          title: 'Español',
          type: 'text',
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'text',
        }),
      ],
    }),

    defineField({
      name: 'participant',
      title: 'Participant',
      description: 'Participated in a project',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'projectAuthor',
      title: 'Project Author',
      description: 'Wrote an entry for a project item',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'referenceAuthor',
      title: 'Reference Author',
      description: 'Created a refrence material piece',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
    },
  },
})
