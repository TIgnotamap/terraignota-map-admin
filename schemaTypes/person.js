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
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),

    defineField({
      name: 'pseudonym',
      title: 'Pseudonym',
      type: 'string',
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
      name: 'activity',
      title: 'Activity',
      type: 'array',
      description: 'only 1 activity per entry, por favor!',
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
      pseudonym: 'pseudonym',
    },
    prepare(selection) {
      const {pseudonym, firstName, lastName} = selection
      if (!firstName && !lastName && !pseudonym) {
        return {
          title: 'Unknown',
        }
      }
      return {
        title: `${firstName ? `${firstName} ` : ''} ${lastName ? `${lastName}` : ''} ${pseudonym ? `${pseudonym} ` : ''}`,
      }
    },
  },
})
