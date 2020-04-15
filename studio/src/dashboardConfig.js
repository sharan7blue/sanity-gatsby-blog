export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e97363063579d590b276a5f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5ksfuzqh',
                  apiId: '4d8ad167-e39d-4b5a-a1f9-428f4734265a'
                },
                {
                  buildHookId: '5e973630efb15b8de5ce8c7e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7aek2cyd',
                  apiId: '4701ecc9-9580-4eae-931e-db7d90eb283f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharan7blue/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7aek2cyd.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
