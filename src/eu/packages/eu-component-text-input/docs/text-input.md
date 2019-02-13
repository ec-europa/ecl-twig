# ECL Twig - EU Text Input component

npm package: `@ecl-twig/eu-component-text-input`

```shell
npm install --save @ecl-twig/eu-component-text-input
```

## Text input

### Parameters:

- "id" (string) (default: '')
- "disabled" (boolean) (default: false)
- "invalid" (boolean) (default: false)
- "invalidIconLabel" (string) (default: '')
- "name" (string) (default: '')
- "hideLabel" (boolean) (default: '')
- "placeholder" (string) (default: '')
- "type" (string) (default: 'text')
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "helperText"
- "invalidText"
- "label"

### Example:

```twig
{% include 'path/to/text-input.html.twig' with {
  label: 'Email address',
  placeholder: 'Please enter your email address',
  invalidText: "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'",
  helperText: 'This address will be used for contact purpose',
  id: 'input-email',
  name: 'email',
  extra_classes: 'my-extra-class-1 my-extra-class-2',
  extra_attributes: [{ name: 'data-test-1', value: 'data-test-value-1' },{ name: 'data-test-2', value: 'data-test-value-2' }]
} %}
```
