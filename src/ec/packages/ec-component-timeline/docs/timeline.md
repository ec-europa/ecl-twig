# ECL Twig - EC Timeline

npm package: `@ecl-twig/ec-component-timeline`

```shell
npm install --save @ecl-twig/ec-component-timeline
```

## Timeline

### Parameters

- "toggleCollapsed": (string) (default: 'Show %d more items')
- "toggleExpanded": (string) (default: 'Show %d items')
- "visibleItems": (integer) (default: 0): 0 means display all
- "items" (array) (default: []):
  - "id": (string) (default: '')
  - "label": (string) (default: '')
  - "title": (string) (default: '')
  - "content": (block) (default: '')
- "icon_path" (string) (default: ''): file containing the svg icons
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
