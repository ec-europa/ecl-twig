# ECL Twig - EC Expandable component

npm package: `@ecl-twig/ec-component-expandable`

```shell
npm install --save @ecl-twig/ec-component-expandable
```

### Parameters:

- "id" (string) (default: '')
- "button" (predefined structure) : Button component structure
- "list" (object) (default: {})
  - "items" (array) (default: [])
    - "label" (string) (default: '') link html markup
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated)
- "extra_attributes" (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) (optional) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/dropdown-legacy.html.twig' with { 
  id: 'dropdown-legacy-example',  
  button: {  
    label: 'Dropdown button',  
    variant: 'secondary',  
    icon: {  
      shape: 'ui--corner-arrow',  
      transform: 'rotate-180',  
      size: 'fluid',  
    },  
  },  
  list: {  
    items: [  
      {  
        label:  
          '<a class="ecl-link ecl-link--standalone" href="/example">Jobs, growth and investment</a>',  
      },  
      {  
        label:  
          '<a class="ecl-link ecl-link--standalone" href="/example">Digital single market</a>',  
      },  
      {  
        label:  
          '<a class="ecl-link ecl-link--standalone" href="/example">Energy union and climate</a>',  
      },  
    ],  
  }

} %}
```
