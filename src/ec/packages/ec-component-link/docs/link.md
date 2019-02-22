# ECL Twig - EC Link component

npm package: `@ecl-twig/ec-component-link`

```shell
npm install --save @ecl-twig/ec-component-link
```

## Link

### Parameters

- "link" (associative array) (default: 'predefined structure below')
  - "type" (string) (default: '') - type of link. Available types are 'default' or standalone
  - "label" (string) (default: '') - Content of link
  - "path" (string) (default: '') - Link url (href attribute)
  - "icon_position" (string) (default: 'after') - Position of link icon (can be 'before' or 'after') if icon is available
- "icon" [optional] (associative array) default: A predefined structure such as in the Icon component. All parameters can be freely set, except for the 'size' parameter, which is set permanently as 'fluid'.
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/icon.html.twig' with { 
  link: { 
    type: 'standalone', 
    label: 'Standalone link', 
    path: 'http://google.com', 
    icon_position: 'after', 
  }, 
  icon: { 
    path: '/path-to-the-icon-file', 
    type: 'ui', 
    name: 'external', 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
