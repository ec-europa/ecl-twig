# ECL Twig - EC Select component

npm package: `@ecl-twig/ec-component-select`

```shell
npm install --save @ecl-twig/ec-component-select
```

## Select

### Parameters:

- "id" (string) (default: '')
- "options" (array) (default: []):
  - "value" (string) (default: '')
  - "label" (string) (default: '')
- "disabled" (boolean) (default: false)
- "invalid" (boolean) (default: false)
- "name" (string) (default: '')
- "hide_label" (boolean) (default: '')
- "icon_path" (string) (default: ''): file containing the svg icons
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the select
- "extra_attributes" (optional) (array) (default: []) Extra attributes for select
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "helper_text"
- "invalid_text"
- "label"

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/select.html.twig' with { 
  label: 'Select a country', 
  options: [ 
    { 
      value: 1, 
      label: 'Belgium' 
    }, 
    ... 
  ], 
  invalid: false, 
  invalid_text: 'Error message', 
  helper_text: 'Help message', 
  disabled: false, 
  hide_label: false, 
  id: 'example-id', 
  name: 'example-name', 
  icon_path: '/static/icons.svg', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
