# ECL Twig - EC Inpage navigation

npm package: `@ecl-twig/ec-component-inpage-navigation`

```shell
npm install --save @ecl-twig/ec-component-inpage-navigation
```

### Parameters

Parameters:

- **"title"** (string) (default: '')
- **"links"** (associative array) (default: predefined structure):
  - href: (string) (default: '')
  - label: (string) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-inpage-navigation/ecl-inpage-navigation.html.twig' with {  
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
