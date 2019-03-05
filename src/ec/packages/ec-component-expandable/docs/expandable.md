# ECL Twig - EC Expandable component

npm package: `@ecl-twig/ec-component-expandable`

```shell
npm install --save @ecl-twig/ec-component-expandable
```

### Parameters:

- "id" (string) (default: '')
- "label_expanded" (string) (default: '')
- "label_collapsed" (string) (default: '')
- "label_collapsed" (string) (default: '')
- "expanded" (string) (default: '')
- "button" (predefined structure) : Button component structure
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated)
- "extra_attributes" (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "content"

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/expandable.html.twig' with { 
  id: 'expandable-example', 
  button: { 
    label: 'Collapsed button', 
    variant: 'secondary', 
    icon: { 
      type: 'ui', 
      name: 'corner-arrow', 
      transform: 'rotate-180', 
      size: 'fluid', 
    }, 
  }, 
  label_expanded: 'Expanded button', 
  label_collapsed: 'Collapsed button', 
  content: 
    'The EU is building an energy union that ensures Europe’s energy supply is safe, viable and accessible to all. In doing so, it can boost the economy and attract investments that can create new jobs opportunities.', 
} %}
```
