export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d69e0b40c2e32e989c25dc7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gr5q65jg',
                  apiId: '0c805f3f-ecb6-4ee0-a38b-0a18f0e625c0'
                },
                {
                  buildHookId: '5d69e0b4080982696fd46282',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7t12f1ez',
                  apiId: 'b122c0f9-f27d-40b8-a9d9-02bdb6dd7330'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hunvreus/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7t12f1ez.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
