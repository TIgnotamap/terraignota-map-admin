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
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'person'},
    }),
    defineField({
      name: 'date',
      title: 'YearDate',
      type: 'date',
    }),
    defineField({
      name: 'apaReference',
      title: 'APA Reference',
      description:
        'APA Style Reference https://apastyle.apa.org/style-grammar-guidelines/references',
      type: 'blockContent',
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
