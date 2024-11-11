import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['settings'])

const staticTemplates = [
  {
    id: 'items-by-project',
    title: 'Items by Project',
    description: 'Items by Project',
    schemaType: 'item',
    parameters: [{name: 'projectId', type: 'string'}],
    value: (params) => ({project: {_type: 'reference', _ref: params.projectId}}),
  },
]

export default defineConfig({
  name: 'default',
  title: 'TIgnotamap',

  projectId: 'an9xyr32',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => {
      const filteredTemplates = templates.filter(({schemaType}) => !singletonTypes.has(schemaType))
      return [...filteredTemplates, ...staticTemplates]
    },
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
