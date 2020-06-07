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
                  buildHookId: '5edc6e141311f84c87d10b62',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-a8266y2w',
                  apiId: 'b3ec3b09-546b-4749-a9b7-02b7ffa7e304'
                },
                {
                  buildHookId: '5edc6e15f7ef3a9468a7dde6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-23srweju',
                  apiId: 'a754a3dc-85ee-48cd-a669-d8a20c99a24d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shankarsridhar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-23srweju.netlify.app',
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
