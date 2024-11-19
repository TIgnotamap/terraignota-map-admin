import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'item',
  title: 'Item',
  type: 'document',
  fieldsets: [
    {name: 'dimensions', title: 'Dimensions', options: {columns: 2}},
    {name: 'coordinates', title: 'Coordinates', options: {columns: 2}},
  ],
  fields: [
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: {type: 'project'},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'code',
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),

    defineField({
      name: 'template',
      title: 'Template',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: '0'},
          {title: 'Rock', value: '1'},
          {title: 'Oscillator', value: '2'},
          {title: 'Perpective', value: '3'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      hidden: ({document}) => !document?.template,
    }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: ({document}) =>
        !document?.template || document?.template === '2' || document?.template === '3',
    }),

    defineField({
      name: 'lat',
      title: 'Lat',
      type: 'number',
      fieldset: 'coordinates',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document?.template,
    }),

    defineField({
      name: 'long',
      title: 'Long',
      type: 'number',
      fieldset: 'coordinates',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document?.template,
    }),

    defineField({
      name: 'gps',
      title: 'GPS',
      type: 'string',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document?.template,
    }),

    defineField({
      name: 'l',
      title: 'L',
      type: 'number',
      fieldset: 'dimensions',
      hidden: ({document}) => !document?.template || document?.template === '3',
    }),

    defineField({
      name: 'w',
      title: 'W',
      type: 'number',
      fieldset: 'dimensions',
      hidden: ({document}) =>
        !document?.template || document?.template === '2' || document?.template === '3',
    }),

    defineField({
      name: 'h',
      title: 'H',
      type: 'number',
      fieldset: 'dimensions',
      hidden: ({document}) =>
        !document?.template || document?.template === '2' || document?.template === '3',
    }),

    defineField({
      name: 'kg',
      title: 'Kg',
      type: 'number',
      fieldset: 'dimensions',
      hidden: ({document}) =>
        !document?.template || document?.template === '2' || document?.template === '3',
    }),

    defineField({
      name: 'rockProperties',
      title: 'Rock Properties',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Type',
          type: 'object',
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
          options: {columns: 2},
        },
        {
          name: 'class',
          title: 'Class',
          type: 'object',
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
          options: {columns: 2},
        },
        {
          name: 'texture',
          title: 'Texture',
          type: 'object',
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
          options: {columns: 2},
        },
        {
          name: 'color',
          title: 'Color',
          type: 'object',
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
          options: {columns: 2},
        },
        {
          name: 'composition',
          title: 'Composition',
          type: 'object',
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
          options: {columns: 2},
        },
        {
          name: 'genesis',
          title: 'Genesis',
          type: 'object',
          fields: [
            {
              name: 'es',
              title: 'Español',
              type: 'text',
            },
            {
              name: 'en',
              title: 'English',
              type: 'text',
            },
          ],
          options: {columns: 2},
        },
        {
          name: 'depth',
          title: 'Depth',
          type: 'object',
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
          options: {columns: 2},
        },
        {
          name: 'age',
          title: 'Age',
          type: 'object',
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
          options: {columns: 2},
        },
        {
          name: 'physiography',
          title: 'Physiography',
          type: 'object',
          fields: [
            {
              name: 'es',
              title: 'Español',
              type: 'text',
            },
            {
              name: 'en',
              title: 'English',
              type: 'text',
            },
          ],
          options: {columns: 2},
        },
      ],
      hidden: ({document}) =>
        !document?.template ||
        document?.template === '0' ||
        document?.template === '2' ||
        document?.template === '3',
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
              name: 'propValue',
              title: 'Property Value/s',
              type: 'object',
              fields: [
                {
                  name: 'shortValuesList',
                  title: 'Short Value/s',
                  type: 'array',
                  of: [
                    {
                      name: 'shortValue',
                      title: 'Value',
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
                {
                  name: 'longValue',
                  title: 'Long Value',
                  type: 'object',
                  fields: [
                    {
                      name: 'es',
                      title: 'Español',
                      type: 'text',
                    },
                    {
                      name: 'en',
                      title: 'English',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'prop.en',
              subtitle: 'detail.en',
            },
          },
        },
      ],
      hidden: ({document}) =>
        !document?.template ||
        document?.template === '1' ||
        document?.template === '2' ||
        document?.template === '3',
    }),

    defineField({
      name: 'video',
      title: 'Video',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
        }),
        defineField({
          name: 'file',
          title: 'File',
          type: 'file',
        }),
      ],
      hidden: ({document}) => !document?.template || document?.template === '1',
    }),

    defineField({
      name: 'text',
      title: 'Text',
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
        defineField({
          name: 'authors',
          title: 'Author/s',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'person'}, {type: 'organization'}]}],
        }),
      ],
      hidden: ({document}) => !document?.template || document?.template === '3',
    }),

    defineField({
      name: 'images',
      title: 'Image/s',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
      hidden: ({document}) => !document?.template || document?.template === '3',
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
              name: 'subject',
              title: 'Subject',
              type: 'reference',
              to: [{type: 'person'}, {type: 'organization'}],
              validation: (Rule) => Rule.required(),
            },
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
          ],
          preview: {
            select: {
              orgEn: 'subject.name.en',
              orgEs: 'subject.name.es',
              firstName: 'subject.firstName',
              lastName: 'subject.lastName',
              pseudonym: 'subject.pseudonym',
              subtitle: 'role.en',
            },
            prepare(selection) {
              const {orgEn, orgEs, pseudonym, firstName, lastName} = selection
              if (!orgEn && !orgEs && !firstName && !lastName && !pseudonym) {
                return {
                  title: 'Unknown',
                }
              }
              return {
                title: `${orgEn ? `${orgEn} ` : orgEs ? `${orgEs} ` : ''} ${firstName ? `${firstName} ` : ''} ${lastName ? `${lastName}` : ''} ${pseudonym ? `${pseudonym} ` : ''}`,
                subtitle: selection.subtitle,
              }
            },
          },
        },
      ],
      hidden: ({document}) => !document?.template,
    }),

    defineField({
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        {
          name: 'reference',
          title: 'Reference',
          type: 'reference',
          to: {type: 'referenceMaterial'},
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      hidden: ({document}) => !document?.template || document?.template === '3',
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
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                },
              ],
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
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
      hidden: ({document}) => !document?.template || document?.template === '3',
    }),

    defineField({
      name: 'condition',
      description: 'e.g. "Repatriated"',
      title: 'Condition',
      type: 'object',
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
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
      hidden: ({document}) => !document?.template || document?.template === '3',
    }),
  ],
  preview: {
    select: {
      title: 'code',
    },
  },
})
