import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/CodeInMind/',
  title: "Code In Mind",
  description: "A Terea documentation",
  lastUpdated: true,
  head: [
    ['link', 
      { rel: 'icon', href: '/CodeInMind/favicon.ico' }
    ]
  ],
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: 'logo.png',
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Python', link: '/python' },
      { text: 'Math', link: '/math' },
      { text: 'Tools', link: '/tools' },
      { text: 'Ide', link: '/ide' },
    ],

    sidebar: {
      '/math/': [
        {
          text: 'Math',
          items: [
            {
              text: 'Calcolo Differenziale',
              items: [
                { text: 'Polinomio di Taylor', link: '/math/calcolo_differenziale/' },
                { text: 'Tabella Sviluppi', link: '/math/calcolo_differenziale/taylor_tabella' },
              ]
            },
            {
              text: 'Equazioni Differenziali',
              items: [
                { text: 'Equazioni Differenziali Ordinarie', link: '/math/equazioni_differenziali/eq_diff_ordinarie' },
                { text: 'Equazioni Differenziali Lineari Primo Ordine', link: '/math/equazioni_differenziali/eq_lineari_primo_ordine' },
                { text: 'Equazioni del Primo Ordine a variabili separabili', link: '/math/equazioni_differenziali/eq_primo_ordine_variabili_separabili' },
                { text: 'Equazioni del Secondo Ordine', link: '/math/equazioni_differenziali/eq_lineari_secondo_ordine' },
              ]
            },
            {
              text: 'Integrali Impropri',
              items: [
                { text: 'Integrabilità in senso Improprio', link: '/math/integrali_impropri/' },
              ]
            }
          ]
        }
      ],
      '/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Index', link: '/python/' },
            { text: 'Errors and Exceptions', link: '/python/errors_and_exceptions' },
          ]
        }
      ],
      '/tools/': [
        {
          text: 'Tools',
          items: [
            {
              text: 'GitHub',
              items: [
                { text: 'Introduzione', link: '/tools/github/' },
                { text: 'Workflow' , link: '/tools/github/workflow' },
              ]
            },
          ]
        }
      ],
      '/ide/': [
        {
          text: 'Ide',
          items: [
            {
              text: 'Visual Studio Code',
              items: [
                { text: 'Introduzione', link: '/ide/vscode/' },
                { text: 'Task', link: '/ide/vscode/task' },
              ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/giulio333/CodeInMind' }
    ]
  }
})
