# ECL Twig - EC File Upload component

npm package: `@ecl-twig/ec-component-file-upload`

```shell
npm install --save @ecl-twig/ec-component-file-upload
```

## File Upload

### Parameters:

- "id" (string) (default: '') - Input id
- "name" (string) (default: '') - Input id
- "invalid" (boolean) (default: false) - When an error is found
- "invalid_text" (string) (default: '') - Error message
- "disabled" (boolean) (default: false) - Disables the input field
- "required" (boolean) (default: false) - Makes the input required
- "required_text" (string) (default: '') - Text after the label when required
- "optional_text" (string) (default: '') - Text after the label when not required
- "extra_classes" (string) (default: '') - Extra classes for the wrapper
- "extra_attributes" (optional) (array) (default: []) Form extra attributes
  - "name" (string) Attribute name
  - "value" (string) Attribute value

### Blocks:

- "label" (string) (default: '')
- "helper_text" (string) (default: '')

### Example:

<!-- prettier-ignore -->
```twig
{% include 'file-upload.html.twig' with { 
  id: 'my-file-upload', 
  label: 'my file upload label', 
  helper_text: 'this is a helper text', 
  invalid_text: 'this is an invalid text', 
  required_text: '*', 
  optional_text: 'this is an optional text', 
  disabled: false, 
  required: false, 
  invalid: false, 
  extra_classes: 'ecl-deprecated', 
  extra_attributes: [ 
    { 
        name: 'data-test', 
        value : 'data-test-1' 
    }, 
  ], 
} %}
```
