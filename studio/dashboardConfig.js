export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d284fb89a6a8adebc76c90b',
                  title: 'Sanity Studio',
                  name: 'digi-gc-jamstack-studio',
                  apiId: '11d01036-97ac-491c-aad4-42ce0e036d80'
                },
                {
                  buildHookId: '5d284fb802fd16ea5b76b11b',
                  title: 'Landing pages Website',
                  name: 'digi-gc-jamstack',
                  apiId: 'a468993c-6c23-41c7-8781-dceb3520a7cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elektronikasa/digi-gc-jamstack',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://digi-gc-jamstack.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
