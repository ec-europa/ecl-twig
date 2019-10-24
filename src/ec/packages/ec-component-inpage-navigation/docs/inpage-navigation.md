# ECL Twig - EC Inpage navigation

npm package: `@ecl-twig/ec-component-inpage-navigation`

```shell
npm install --save @ecl-twig/ec-component-inpage-navigation
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
{% include '@ecl-twig/ec-component-inpage-navigation/inpage-navigation.html.twig' with {  
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
