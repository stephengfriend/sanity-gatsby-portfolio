export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cf1b31d1c3ac82203930251',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4niqiorf',
                  apiId: 'b1e8e5f3-393f-42e0-8776-a4bae05984d2'
                },
                {
                  buildHookId: '5cf1b31d899b5356d3db82a4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e99oeuv1',
                  apiId: 'f7d95849-d12f-4fec-9253-8cbfc4e3439d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephengfriend/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-e99oeuv1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
