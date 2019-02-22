# ECL Twig - EU Button component

npm package: `@ecl-twig/eu-component-button`

```shell
npm install --save @ecl-twig/eu-component-button
```

## CTA button (Call to action)

### Parameters

- "label" (string) (default: '')
- "variant" (string) (default: 'primary'): variant of button (can be 'primary', 'secondary', 'call', 'ghost', 'search')
- "type" (string) (default: 'submit'): can be the same type as HTML button - 'submit', 'reset', 'button'
- "disabled" (bool) (default: false): define if button should be disabled (HTML disabled attribute)
- "icon_position" (string, optional) (default: after): Define icon position, can be 'before' or 'after'
- "icon" (associative array, optional) default: A predefined structure such as in the Icon component. All parameters can be freely set, except for the 'size' parameter, which is set permanently as 'xs'.
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the button
- "extra_attributes" (optional) (array) (default: []) Extra attributes for button
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/button.html.twig' with { 
  variant: 'call', 
  label: 'Example button', 
  disabled: false, 
  icon: { 
    path: '/path-to-the-icon-file', 
    type: 'ui', 
    name: 'corner-arrow', 
  }, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
