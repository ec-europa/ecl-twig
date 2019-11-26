# ECL Twig - EC File Upload component

npm package: `@ecl-twig/ec-component-file-upload`

```shell
npm install --save @ecl-twig/ec-component-file-upload
```

### Parameters:

- **"id"** (string) (default: '') - Input id
- **"name"** (string) (default: '') - Input id
- **"invalid"** (boolean) (default: false) - When an error is found
- **"invalid_text"** (string) (default: '') - Error message
- **"disabled"** (boolean) (default: false) - Disables the input field
- **"required"** (boolean) (default: false) - Makes the input required
- **"required_text"** (string) (default: '') - Text after the label when required
- **"optional_text"** (string) (default: '') - Text after the label when not required
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "label" (string) (default: '')
- "helper_text" (string) (default: '')

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-file-upload/ecl-file-upload.html.twig' with { 
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
