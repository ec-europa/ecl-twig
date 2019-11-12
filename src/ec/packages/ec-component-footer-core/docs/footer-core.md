# ECL Twig - EC Footer component

npm package: `@ecl-twig/ec-component-footer-core`

```shell
npm install --save @ecl-twig/ec-component-footer-core
```

## Parameters

- "sections" (array objects) (default: [])
  - "title" (link objects) see Link component
  - "description" (string) (default: ''),
  - "section_class_name" (string) (default: ''),
  - "links" (array of link objects) (default: []),
  - "list_class_name" (string) (default: []),
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/footer-core/ecl-footer-core.html.twig' with { 
  sections: [ 
    { 
      title: { 
        link: { 
          label: 'European Commission website', 
          path: '#', 
        }, 
      }, 
      description: 
        'This site is managed by the Directorate-General for Communication', 
    }, 
    { 
      section_class_name: 'ecl-footer-core__section--separator', 
      links: [ 
        { 
          link: { 
            label: 'Standalone link', 
            path: 'http://google.com', 
          }, 
        }, 
        ... 
      ], 
      list_class_name: 'ecl-footer-core__list--columns', 
    }, 
    {  
      links: [ 
        { 
          link: { 
            label: 'Follow the European Commission on social media', 
            path: '/example', 
            icon_position: 'after', 
            }, 
            icon: { 
              path: '/path-to-the-icon-file', 
              type: 'ui', 
              name: 'external', 
            }, 
          }, 
        }, 
        ... 
      ], 
    }, 
    { 
      links: [ 
        { 
          link: { 
            label: 'Language policy', 
            path: '/example', 
          }, 
        }, 
        ... 
      ], 
    }, 
  ], 
} %}
```
