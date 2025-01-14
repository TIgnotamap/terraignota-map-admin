import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'info',
      title: 'Info',
      type: 'object',
      fields: [
        defineField({
          name: 'es',
          title: 'Español',
          type: 'blockContent',
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'blockContent',
        }),
      ],
    }),

    defineField({
      name: 'hideCredits',
      title: 'Hide Credits',
      description: 'Hide credits in all items',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'audios',
      title: 'Background Audios',
      description: '8 files max',
      type: 'array',
      of: [{type: 'url'}],
      validation: (Rule) => Rule.max(8),
    }),

    defineField({
      name: 'credits',
      title: 'Credits',
      description: 'General project & website credits',
      type: 'array',
      of: [
        {
          name: 'credit',
          type: 'object',
          fields: [
            {
              name: 'role',
              title: 'Role',
              type: 'object',
              options: {columns: 2},
              fields: [
                {
                  name: 'es',
                  title: 'Español',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              name: 'subjects',
              title: 'Subjects',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'person'}, {type: 'organization'}],
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'role.en',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'link',
          title: 'Link',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'object',
              fields: [
                {
                  name: 'es',
                  title: 'Español',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'text.en',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
