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
                  buildHookId: '619eb41ba89ea2cc39bbb728',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-aju41of7',
                  apiId: '3e434c08-96ad-4969-8849-dbeb2932a532'
                },
                {
                  buildHookId: '619eb41b25633bef46e2fa4d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1pt5k1tr',
                  apiId: 'c0108f21-89c3-4cbf-9d41-cf375fde8131'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joltm/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1pt5k1tr.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
