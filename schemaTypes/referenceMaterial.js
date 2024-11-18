import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'referenceMaterial',
  title: 'Reference Material',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authors',
      title: 'Author/s',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'person'}, {type: 'organization'}]}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      title: 'Date',
      description: 'Choose random day/month if unspecified',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'dateDisplay',
      title: 'Date Display',
      description: 'How date will be displayed on the site',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'YYYY', value: 'YYYY'},
          {title: 'YYYY-MM', value: 'YYYY-MM'},
          {title: 'YYYY-MM-DD', value: 'YYYY-MM-DD'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),

    defineField({
      name: 'apaReference',
      title: 'APA Reference',
      description:
        'APA Style Reference https://apastyle.apa.org/style-grammar-guidelines/references',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [{type: 'file'}],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'url'}],
    }),
  ],
})
