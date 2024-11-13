import project from './schemaTypes/project'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('🗺️ Terra Ignonta Map')
    .items([
      S.listItem()
        .title('Projects')
        .icon(() => '📂')
        .schemaType('project')
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .filter('_type == $type', {type: 'project'}),
        ),
      S.listItem()
        .title('Items')
        .icon(() => '🪨')
        // .schemaType('item')
        .child(
          S.list()
            .title('Items')
            .items([
              S.listItem()
                .id('all-items')
                .title('All Items')
                .schemaType('item')
                .child(
                  S.documentTypeList('item')
                    .title('All Items')
                    .filter('_type == $type', {type: 'item'}),
                ),
              S.listItem()
                .id('items-by-project')
                .title('Grouped By Project')
                .child(
                  S.documentTypeList('project')
                    .title('Projects')
                    .filter('_type == $type', {type: 'project'})
                    .child((projectId) =>
                      S.documentTypeList('item')
                        .title('Items by Project')
                        .filter('_type == $type && project._ref == $projectId')
                        .params({
                          type: 'item',
                          projectId,
                        })
                        .initialValueTemplates([
                          S.initialValueTemplateItem('items-by-project', {projectId}),
                        ]),
                    ),
                ),
            ]),
        ),

      S.listItem()
        .title('Tags')
        .icon(() => '🏷️')
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags').filter('_type == $type', {type: 'tag'})),

      S.listItem()
        .title('References')
        .icon(() => '📚')
        .schemaType('referenceMaterial')
        .child(
          S.documentTypeList('referenceMaterial')
            .title('References')
            .filter('_type == $type', {type: 'referenceMaterial'}),
        ),

      S.listItem()
        .title('People')
        .icon(() => '👤')
        .schemaType('person')
        .child(
          S.documentTypeList('person').title('People').filter('_type == $type', {type: 'person'}),
        ),

      S.listItem()
        .title('Exhibitions')
        .icon(() => '🏛️')
        .schemaType('exhibition')
        .child(
          S.documentTypeList('exhibition')
            .title('Exhibitions')
            .filter('_type == $type', {type: 'exhibition'}),
        ),
      S.listItem()
        .title('Settings')
        .icon(() => '⚙️')
        .schemaType('settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('c0e21436-657e-4563-9e1d-0838e5e5ee41'),
        ),
    ])
