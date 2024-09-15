import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
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
      '/learn/programming_languages/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Home', link: './' },
            { 
              text: 'Moduli', 
              link: './modules/',
              items: [
                { text: 'Introduzione', link: './modules/' },
                { text: 'Namespace', link: './modules/namespace' },
                { 
                  text: 'Standard Modules', 
                  collapsed: true,
                  link: './modules/standard_modules/',
                  items: [
                    { text: 'Random', link: './modules/standard_modules/random' },
                    { text: 'Platform', link: './modules/standard_modules/platform' },
                  ]
                },
                { text: 'Package', link: './modules/package' },
              ]
            },            
            { text: 'Errors and Exceptions', link: './errors_and_exceptions' },
          ]
        }
      ],
      'learn/tools/github/': [
        {
          text: 'GitHub',
          items: [
            { text: 'Home', link: './' },
            { text: 'Introduzione', link: './introduzione' },
            { text: 'Workflow' , link: './workflow' },
          ]
        }
      ],
      'learn/tools/vscode/': [
        {
          text: 'Visual Studio Code',
          items: [
            { text: 'Home', link: './' },
            { text: 'Introduzione', link: './' },
            { text: 'Task', link: './task' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/giulio333/CodeInMind' }
    ]
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
})

