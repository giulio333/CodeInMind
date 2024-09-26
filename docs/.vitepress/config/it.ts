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
      '/it/learn/engineering/mathematics/': [
        {
          text: 'Mathematics',
          link: '/it/learn/engineering/mathematics/',
          items: [
            {
              text: 'Calcolo Differenziale',
              collapsed: true,
              items: [
                { text: 'Polinomio di Taylor', link: '/it/learn/engineering/mathematics/calcolo_differenziale/' },
                { text: 'Tabella Sviluppi', link: '/it/learn/engineering/mathematics/calcolo_differenziale//taylor_tabella' },
              ]
            },
            {
              text: 'Equazioni Differenziali',
              collapsed: true,
              items: [
                { text: 'Equazioni Differenziali Ordinarie', link: '/it/learn/engineering/mathematics/equazioni_differenziali/eq_diff_ordinarie' },
                { text: 'Equazioni Differenziali Lineari Primo Ordine', link: '/it/learn/engineering/mathematics/equazioni_differenziali/eq_lineari_primo_ordine' },
                { text: 'Equazioni del Primo Ordine a variabili separabili', link: '/it/learn/engineering/mathematics/equazioni_differenziali/eq_primo_ordine_variabili_separabili' },
                { text: 'Equazioni del Secondo Ordine', link: '/it/learn/engineering/mathematics/equazioni_differenziali/eq_lineari_secondo_ordine' },
              ]
            },
            {
              text: 'Integrali Impropri',
              collapsed: true,
              items: [
                { text: 'Integrabilità in senso Improprio', link: '/it/learn/engineering/mathematics/integrali_impropri/' },
              ]
            }
          ]
        }
      ],
      '/it/learn/programming_languages/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Home', link: '/it/learn/programming_languages/python/' },
            { 
              text: 'Moduli', 
              link: '/it/learn/programming_languages/python/modules/',
              items: [
                { text: 'Introduzione', link: '/it/learn/programming_languages/python/modules/' },
                { text: 'Namespace', link: '/it/learn/programming_languages/python/modules/namespace' },
                { text: 'Import', link: '/it/learn/programming_languages/python/modules/import' },
                { 
                  text: 'Standard Modules', 
                  collapsed: true,
                  link: '/it/learn/programming_languages/python/modules/standard_modules/',
                  items: [
                    { text: 'Random', link: '/it/learn/programming_languages/python/modules/standard_modules/random' },
                    { text: 'Platform', link: '/it/learn/programming_languages/python/modules/standard_modules/platform' },
                  ]
                },
                { text: 'Package', link: '/it/learn/programming_languages/python/modules/package' },
                { text: 'PIP', link: '/it/learn/programming_languages/python/modules/pip' },
              ]
            },
            {
              text: 'Stringhe',
              link: '/it/learn/programming_languages/python/strings/strings/',
              items: [
                { text: 'Introduzione', link: '/it/learn/programming_languages/python/strings/' },
                { text: 'ASCII', link: '/it/learn/programming_languages/python/strings/ASCII' },
                { text: 'Unicode', link: '/it/learn/programming_languages/python/strings/unicode' },
                { text: 'Stringhe Python', link: '/it/learn/programming_languages/python/strings/python_strings' },
                { text: 'Metodi Stringhe', link: '/it/learn/programming_languages/python/strings/strings_method' },
              ]
            },
            { text: 'Errori ed Eccezioni', link: '/it/learn/programming_languages/python/errors_and_exceptions' },
          ]
        }
      ],
      '/it/learn/tools/github/': [
        {
          text: 'GitHub',
          items: [
            { text: 'Home', link: '/learn/tools/github/.' },
            { text: 'Introduzione', link: '/learn/tools/github/introduzione' },
            { text: 'Workflow' , link: '/learn/tools/github/workflow' },
          ]
        }
      ],
      'it/learn/tools/vscode/': [
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