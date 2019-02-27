# ECL Twig - EC Select component

npm package: `@ecl-twig/ec-component-select`

```shell
npm install --save @ecl-twig/ec-component-select
```

## Select

### Parameters:

- "id" (string) (default: '')
- "disabled" (boolean) (default: false)
- "invalid" (boolean) (default: false)
- "invalid_icon_label" (string) (default: '')
- "name" (string) (default: '')
- "hide_label" (boolean) (default: '')
- "placeholder" (string) (default: '')
- "type" (string) (default: 'text')
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
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
  label: 'Email address', 
  placeholder: 'Please enter your email address', 
  invalid_text: "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'", 
  helper_text: 'This address will be used for contact purpose', 
  id: 'input-email', 
  name: 'email', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
