export default {
    label: 'root',
    nodes: [
      {
        label: 'folder1',
        nodes: [
          {
            label: 'folder1.1',
            files: [
              {name: 'one.xls', link: '#'},
              {name: 'two.doc', link: '#'},
              {name: 'three.txt', link: '#'},
              {name: 'four.pdf', link: '#'}
            ]
          },
          {
            label: 'folder1.2',
            nodes: [
              {
                label: 'folder1.2.1',
                files: [
                  {name: 'one.doc', link: '#'},
                  {name: 'two.txt', link: '#'},
                  {name: 'three.xls', link: '#'},
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'folder2',
        nodes: [
          {
            label: 'folder2.1',
            files: [
              {name: 'one.xls', link: '#'},
              {name: 'two.doc', link: '#'},
              {name: 'three.txt', link: '#'},
              {name: 'four.pdf', link: '#'}
            ]
          },
          {
            label: 'folder2.2',
            nodes: [
              {
                label: 'folder2.2.1',
                files: [
                  {name: 'one.doc', link: '#'},
                  {name: 'two.txt', link: '#'},
                  {name: 'three.xls', link: '#'},
                ]
              }
            ]
          }
        ]
      }    
    ]
  }