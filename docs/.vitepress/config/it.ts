import { mathematicsSidebar } from './it/mathematics';
import { programmingLanguagesSidebar } from './it/programming_languages';
import { toolsSidebar } from './it/tools';
import { frameworksSidebar } from './it/frameworks';

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
      '/it/learn/engineering/mathematics/': mathematicsSidebar,
      '/it/learn/programming_languages/': programmingLanguagesSidebar,
      '/it/learn/tools/': toolsSidebar,
      '/it/learn/frameworks/': frameworksSidebar
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/giulio333/CodeInMind' }
    ]
  }
};
