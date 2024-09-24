export const enConfig = {
  label: 'English',
  lang: 'en',
  themeConfig: {
    logo: '/logo.png',
    outline: 'deep',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Evan You'
    },
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('packages/')) {
          return `https://github.com/giulio333/CodeInMind/edit/main/${filePath}`
        } else {
          return `https://github.com/giulio333/CodeInMind/edit/main/docs/${filePath}`
        }
      }
    },
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: {
      '/learn/engineering/mathematics/': [
        {
          text: 'Mathematics',
          items: [
            {
              text: 'Differential Calculus',
              collapsed: true,
              items: [
                { text: 'Taylor Polynomial', link: '/learn/engineering/mathematics/calcolo_differenziale/' },
                { text: 'Taylor Table', link: '/learn/engineering/mathematics/calcolo_differenziale/taylor_tabella' },
              ]
            },
            {
              text: 'Differential Equations',
              collapsed: true,
              items: [
                { text: 'Ordinary Differential Equations', link: '/learn/engineering/mathematics/equazioni_differenziali/eq_diff_ordinarie' },
                { text: 'First Order Linear Differential Equations', link: '/learn/engineering/mathematics/equazioni_differenziali/eq_lineari_primo_ordine' },
                { text: 'First Order Separable Differential Equations', link: '/learn/engineering/mathematics/equazioni_differenziali/eq_primo_ordine_variabili_separabili' },
                { text: 'Second Order Differential Equations', link: '/learn/engineering/mathematics/equazioni_differenziali/eq_lineari_secondo_ordine' },
              ]
            },
            {
              text: 'Improper Integrals',
              collapsed: true,
              items: [
                { text: 'Improper Integrability', link: '/learn/engineering/mathematics/integrali_impropri/' },
              ]
            }
          ]
        }
      ],
      '/learn/programming_languages/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Home', link: '/learn/programming_languages/python/' },
            { 
              text: 'Modules', 
              link: '/learn/programming_languages/python/modules/',
              items: [
                { text: 'Introduction', link: '/learn/programming_languages/python/modules/' },
                { text: 'Namespace', link: '/learn/programming_languages/python/modules/namespace' },
                { 
                  text: 'Standard Modules', 
                  collapsed: true,
                  link: '/learn/programming_languages/python/modules/standard_modules/',
                  items: [
                    { text: 'Random', link: '/learn/programming_languages/python/modules/standard_modules/random' },
                    { text: 'Platform', link: '/learn/programming_languages/python/modules/standard_modules/platform' },
                  ]
                },
                { text: 'Package', link: '/learn/programming_languages/python/modules/package' },
              ]
            },
            { text: 'Errors and Exceptions', link: '/learn/programming_languages/python/errors_and_exceptions' },
          ]
        }
      ],
      '/learn/tools/github/': [
        {
          text: 'GitHub',
          items: [
            { text: 'Home', link: '/learn/tools/github/.' },
            { text: 'Introduction', link: '/learn/tools/github/introduction' },
            { text: 'Workflow' , link: '/learn/tools/github/workflow' },
          ]
        }
      ],
      '/learn/tools/vscode/': [
        {
          text: 'Visual Studio Code',
          items: [
            { text: 'Home', link: './' },
            { text: 'Task', link: './task' },
          ]
        }
      ],
      '/learn/frameworks/GraphQL/': [
        {
          text: 'GraphQL',
          items: [
            { text: 'Home', link: '/learn/frameworks/GraphQL/' },
            { text: 'Introduction', link: '/learn/frameworks/GraphQL/introduction' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/giulio333/CodeInMind' }
    ]
  }
};