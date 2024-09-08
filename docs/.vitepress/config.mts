import { defineConfig } from 'vitepress'
import { vitepressPythonEditor } from 'vitepress-python-editor/vite-plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/CodeInMind/',
  title: "Code In Mind",
  description: "A Terea documentation",
  vite: {
    plugins: [
      vitepressPythonEditor(),
    ],
  },
  markdown: {
    math: true
  },
  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Python', link: '/python' },
      { text: 'Math', link: '/math' },
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/math/': [
        {
          text: 'Math',
          items: [
            {
              text: 'Equazioni Differenziali',
              items: [
                { text: 'Equazioni Differenziali Ordinarie', link: '/math/equazioni_differenziali/eq_diff_ordinarie' },
                { text: 'Equazioni Differenziali Lineari Primo Ordine', link: '/math/equazioni_differenziali/eq_lineari_primo_ordine' },
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

      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/python/': [
        {
          text: 'Python',
          items: [
            { text: 'Index', link: '/python/' },
            { text: 'Errors and Exceptions', link: '/python/errors_and_exceptions' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
