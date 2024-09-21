export const itConfig = {
  label: 'Italiano',
  lang: 'it',
  link: '/it/',
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
      { text: 'Home', link: '/it/' },
    ],
    sidebar: {
      '/learn/engineering/mathematics/': [
        {
          text: 'Mathematics',
          link: '/learn/engineering/mathematics/',
          items: [
            {
              text: 'Calcolo Differenziale',
              items: [
                { text: 'Polinomio di Taylor', link: '/learn/engineering/mathematics/calcolo_differenziale/' },
                { text: 'Tabella Sviluppi', link: '/learn/engineering/mathematics/calcolo_differenziale//taylor_tabella' },
              ]
            },
            {
              text: 'Equazioni Differenziali',
              items: [
                { text: 'Equazioni Differenziali Ordinarie', link: '/learn/engineering/mathematics/equazioni_differenziali/eq_diff_ordinarie' },
                { text: 'Equazioni Differenziali Lineari Primo Ordine', link: '/learn/engineering/mathematics/equazioni_differenziali/eq_lineari_primo_ordine' },
                { text: 'Equazioni del Primo Ordine a variabili separabili', link: '/learn/engineering/mathematics/equazioni_differenziali/eq_primo_ordine_variabili_separabili' },
                { text: 'Equazioni del Secondo Ordine', link: '/learn/engineering/mathematics/equazioni_differenziali/eq_lineari_secondo_ordine' },
              ]
            },
            {
              text: 'Integrali Impropri',
              items: [
                { text: 'Integrabilità in senso Improprio', link: '/learn/engineering/mathematics/integrali_impropri/' },
              ]
            }
          ]
        }
      ],
      '/it/learn/programming_languages/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Home', link: '/learn/programming_languages/python/' },
            { 
              text: 'Moduli', 
              link: '/learn/programming_languages/python/modules/',
              items: [
                { text: 'Introduzione', link: '/learn/programming_languages/python/modules/' },
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
            { text: 'Errori ed Eccezioni', link: '/learn/programming_languages/python/errors_and_exceptions' },
          ]
        }
      ],
      '/learn/tools/github/': [
        {
          text: 'GitHub',
          items: [
            { text: 'Home', link: '/learn/tools/github/.' },
            { text: 'Introduzione', link: '/learn/tools/github/introduzione' },
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