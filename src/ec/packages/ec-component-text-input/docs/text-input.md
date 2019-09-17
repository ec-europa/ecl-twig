# ECL Twig - EC Text Field component

npm package: `@ecl-twig/ec-component-text-input`

```shell
npm install --save @ecl-twig/ec-component-text-input
```

## Text field

### Parameters:

- "id" (string) (default: '')
- "disabled" (boolean) (default: false)
- "invalid" (boolean) (default: false)
- "invalid_icon_label" (string) (default: '')
- "required" (boolean) (default: false)
- "name" (string) (default: '')
- "type" (string) (default: '')
- "width" (string) (default: '') Input width size (s, m or l)
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "helper_text"
- "invalid_text"
- "required_text"
- "optional_text"
- "label"

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/text-input.html.twig' with { 
  label: 'Email address', 
  invalid_text: "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'", 
  helper_text: 'This address will be used for contact purpose', 
  id: 'input-email', 
  name: 'email', 
  width: 'm' 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test-1', value: 'data-test-value-1' }, 
    { name: 'data-test-2', value: 'data-test-value-2' } 
  ] 
} %}
```
