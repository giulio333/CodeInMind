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
          link: '/learn/engineering/mathematics/',
          items: [
            {
              text: 'Differential Calculus',
              items: [
                { text: 'Taylor Polynomial', link: '/learn/engineering/mathematics/differential_calculus/' },
                { text: 'Development Table', link: '/learn/engineering/mathematics/differential_calculus/taylor_table' },
              ]
            },
            {
              text: 'Differential Equations',
              items: [
                { text: 'Ordinary Differential Equations', link: '/learn/engineering/mathematics/differential_equations/ordinary_diff_eq' },
                { text: 'First Order Linear Differential Equations', link: '/learn/engineering/mathematics/differential_equations/first_order_linear_diff_eq' },
                { text: 'First Order Separable Differential Equations', link: '/learn/engineering/mathematics/differential_equations/first_order_separable_diff_eq' },
                { text: 'Second Order Differential Equations', link: '/learn/engineering/mathematics/differential_equations/second_order_diff_eq' },
              ]
            },
            {
              text: 'Improper Integrals',
              items: [
                { text: 'Improper Integrability', link: '/learn/engineering/mathematics/improper_integrals/' },
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
      'learn/tools/vscode/': [
        {
          text: 'Visual Studio Code',
          items: [
            { text: 'Home', link: './' },
            { text: 'Task', link: './task' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/giulio333/CodeInMind' }
    ]
  }
};