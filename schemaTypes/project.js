import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      titile: 'Title',
      type: 'object',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'properties',
      type: 'array',
      title: 'Properties',
      of: [
        {
          type: 'object',
          icon: () => '📜',
          fields: [
            {
              name: 'propName',
              title: 'Property Name',
              type: 'object',
              options: {columns: 2},
              fields: [
                {
                  name: 'es',
                  title: 'Español',
                  type: 'string',
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                },
              ],
            },
            {
              name: 'propValues',
              title: 'Property Value/s',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'es',
                      title: 'Español',
                      type: 'string',
                      validation: (rule) => rule.max(50),
                    },
                    {
                      name: 'en',
                      title: 'English',
                      type: 'string',
                      validation: (rule) => rule.max(50),
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'propName.en',
              subtitle: 'propValues[0].en',
            },
          },
        },
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          name: 'es',
          title: 'Español',
          type: 'blockContent',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'blockContent',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'credits',
      title: 'Credits',
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
      name: 'exhibitions',
      title: 'Exhibitions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'exhibition'},
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
