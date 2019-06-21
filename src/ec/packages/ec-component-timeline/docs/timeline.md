# ECL Twig - EC Timeline

npm package: `@ecl-twig/ec-component-timeline`

```shell
npm install --save @ecl-twig/ec-component-timeline
```

## Accordion

### Parameters

- "toggleCollapsed": (string) (default: 'Show %d more items')
- "toggleExpanded": (string) (default: 'Show %d items')
- "button": (object):
  - "label": (string): (default: '')
  - "icon": (object):
    - "shape": (string) (default: '')
    - "size": (string) (default: '')
    - "transform": (string) (default: '')
  - "variant": (string): (default: '')
  - "type": (string): (default: '')
- "items" (array) (default: []):
  - "id": (string) (default: '')
  - "label": (string) (default: '')
  - "title": (string) (default: '')
  - "content": (block) (default: '')
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format:
  - "name" (string) (default: '')
  - "value" (string) (default: '')

### Example :

<!-- prettier-ignore -->
```twig
{% include 'path/to/timeline.html.twig' with {  
  toggleCollapsed: 'Show %d more items', 
  toggleExpanded: 'Hide %d items', 
  button: { 
    label: 'Show all timeline', 
    icon: { 
      shape: 'ui--corner-arrow', 
      size: 'xs', 
      transform: 'rotate-180', 
    }, 
    variant: 'secondary', 
    type: 'button', 
  }, 
  items: [ 
    { 
      id: '0', 
      label: '13 September 2017', 
      title: 'Item title', 
      content: 
        '<a href="/example" class="ecl-link">President Juncker\'s State of the Union speech</a>', 
    } 
  ... 
  ] 
} %}
```
