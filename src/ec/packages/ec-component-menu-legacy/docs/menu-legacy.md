# ECL Twig - EC Navidation Menu

npm package: `@ecl-twig/ec-component-navigation-menu`

```shell
npm install --save @ecl-twig/ec-component-navigation-menu
```

## Inpage navigation

### Parameters

Parameters:

- "title" (string) (default: '')
- "links" (associative array) (default: predefined structure): format:
  {
  href: (string) (default: ''),
  label: (string) (default: '')
  }
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format: [
  {
  "name" (string) (default: ''),
  "value" (string) (default: '')
  },
  ...
  ]

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/navigation-menu.html.twig' with {  
  title: 'Inpage navigation', 
  links: [ 
    { 
      href: '#heading1', 
      label: 'Heading 1', 
    }, 
    ... 
  ], 
  ... 
  ] 
} %}
```
