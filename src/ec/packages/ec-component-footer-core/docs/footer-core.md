# ECL Twig - EC Footer component

npm package: `@ecl-twig/ec-component-footer-core`

```shell
npm install --save @ecl-twig/ec-component-footer-core
```

## Parameters

- "sections" (array objects) (default: [])
  - "title" (predefined structure) see Link component
    - "label" (string) (default: ''),
    - "path" (string) (default: ''),
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
{% include 'path/to/footer-core.html.twig' with { 
  sections: [ 
    { 
      title: { 
        label: 'European Commission website', 
        path: '#', 
      }, 
      description: 
        'This site is managed by the Directorate-General for Communication', 
    }, 
    { 
      section_class_name: 'ecl-footer-core__section--separator', 
      links: [ 
        { 
          label: 'Strategy', 
          path: '/example', 
        }, 
        ... 
      ], 
      list_class_name: 'ecl-footer-core__list--columns', 
    }, 
    {  
      links: [ 
        { 
          label: 'Follow the European Commission on social media', 
          path: '/example', 
          iconPosition: 'after', 
          icon: { 
            shape: 'ui--external', 
            size: 'xs', 
          }, 
        }, 
        ... 
      ], 
    }, 
    { 
      links: [ 
        { 
          label: 'Language policy', 
          path: '/example', 
        }, 
        ... 
      ], 
    }, 
  ], 
} %}
```
