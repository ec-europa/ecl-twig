# ECL Twig - EC File Upload component

npm package: `@ecl-twig/ec-component-file-upload`

```shell
npm install --save @ecl-twig/ec-component-file-upload
```

## File Upload

### Parameters:

- "id" (string) (default: '')
- "invalid" (boolean) (default: false)
- "invalidText" (string) (default: '')
- "disabled" (boolean) (default: false)
- "required" (boolean) (default: false)
- "requiredText" (string) (default: '')
- "optionalText" (string) (default: '')
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format: [
  {
  "name" (string) (default: ''),
  "value" (string) (default: '')
  },
  ...
  ]

### Blocks:

- "label" (string) (default: '')
- "helperText" (string) (default: '')

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/file-upload.html.twig' with { 
  id: 'my-file-upload',
  label: 'my file upload label',
  helperText: 'this is a helper text',
  invalidText: 'this is an invalid text',
  requiredText: 'this is a required text',
  optionalText: 'this is an optional text',
  disable: false,
  required: false,
  invalid: false,
  extra_classes: 'ecl-deprecated',
  extra_attributes: [
    {
        name: 'data-attribute',
        value : '55'
    },
  ],
} %}
```
