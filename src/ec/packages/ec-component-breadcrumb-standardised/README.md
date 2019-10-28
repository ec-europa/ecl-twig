# ECL Twig - EC Breadcrumb Standardised component

npm package: `@ecl-twig/ec-component-breadcrumb-standardised`

```shell
npm install --save @ecl-twig/ec-component-breadcrumb-standardised
```

## Breadcrumb Standardised

### Parameters

- "min_items_left" (integer) (default('1')) - Min numbers of element on the left
- "min_items_right" (integer) (default('2')) - Min numbers of element on the right
- "links" (array) (default: []): format:
  - "label" (string) (default: '') Label of link
  - "path" (string) (default: '') Url of link
- "navigation_text" (string) (default: ''): Text of navigation in breadcrumb
- "ellipsis_label" (string) (default: ''): Label of the ellipsis, e.g. "Click to expand"
- "icon_file_path" (string) (default: ''): URL to icons file
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format:
  - "name" (string) (default: '')
  - "value" (string) (default: '')

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-breadcrumb-standardised/breadcrumb-standardised.html.twig' with { 
  links: [ 
    { 
      label: 'Link 1', 
      path: '/example' 
    }, 
    { 
      label: 'Link 2', 
      path: '/example' 
    }, 
    { 
      label: 'Link 3', 
      path: '/example' 
    }, 
    { 
      label: 'Link 4', 
      path: '/example' 
    }, 
    { 
      label: 'Link 5', 
      path: '/example' 
    }, 
    { 
      label: 'Link 6', 
      path: '/example' 
    }, 
  ], 
  icon_file_path: '/path-to-the-icons-file', 
  navigation_text: 'You are here:',  
  ellipsis_label: 'Click to expand' 
} %}  
```
