export const programmingLanguagesSidebar = [
  {
    text: 'Programming Languages',
    items: [
      {
        text: 'Python',
        items: [
          { text: 'Home', link: '/it/learn/programming_languages/python/' },
          { 
            text: 'Data Structures',
            collapsed: true,
            link: '/it/learn/programming_languages/python/strutture_dati/',
            items: [
              { text: 'Introduction', link: '/it/learn/programming_languages/python/strutture_dati/' },
              { text: 'Sequences', link: '/it/learn/programming_languages/python/strutture_dati/sequence' },
            ]
          },
          { 
            text: 'Modules', 
            link: '/it/learn/programming_languages/python/modules/',
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/it/learn/programming_languages/python/modules/' },
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
            text: 'Strings',
            collapsed: true,
            link: '/it/learn/programming_languages/python/strings/',
            items: [
              { text: 'Introduction', link: '/it/learn/programming_languages/python/strings/' },
              { text: 'ASCII', link: '/it/learn/programming_languages/python/strings/ASCII' },
              { text: 'Unicode', link: '/it/learn/programming_languages/python/strings/unicode' },
              { text: 'Python Strings', link: '/it/learn/programming_languages/python/strings/python_strings' },
              { text: 'String Methods', link: '/it/learn/programming_languages/python/strings/strings_method' },
            ]
          },
          {
            text: 'Exceptions',
            collapsed: true,
            link: '/it/learn/programming_languages/python/exceptions/',
            items: [
              { text: 'Introduction', link: '/it/learn/programming_languages/python/exceptions/' },
              { text: 'BaseException', link: '/it/learn/programming_languages/python/exceptions/BaseException' },
           
            ]
          },
          {
            text: 'OOP',
            collapsed: true,
            link: '/it/learn/programming_languages/python/oop/',
            items: [
              { text: 'Introduction', link: '/it/learn/programming_languages/python/oop/' },
              { text: 'Examples', link: '/it/learn/programming_languages/python/oop/esempi' },
              { text: 'Instance Variables', link: '/it/learn/programming_languages/python/oop/variabili-di-istanza' },
              { text: 'Class Variables', link: '/it/learn/programming_languages/python/oop/variabili-di-classe' },
              { text: 'hasattr', link: '/it/learn/programming_languages/python/oop/hasattr' },
              { text: 'Methods', link: '/it/learn/programming_languages/python/oop/metodi' },
           
            ]
          },
        ]
      }
    ]
  }
];
