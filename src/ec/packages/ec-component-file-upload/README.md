# ECL Twig - EC File Upload component

npm package: `@ecl-twig/ec-component-file-upload`

```shell
npm install --save @ecl-twig/ec-component-file-upload
```

## File Upload

### Parameters:

- "id" (string) (default: '')
- "invalid" (boolean) (default: false)
- "invalid_text" (string) (default: '')
- "disabled" (boolean) (default: false)
- "required" (boolean) (default: false)
- "required_text" (string) (default: '')
- "optional_text" (string) (default: '')
- "extra_classes" (string) (default: '')
- "extra_attributes" (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Blocks:

- "label" (string) (default: '')
- "helperText" (string) (default: '')

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/file-upload.html.twig' with {  
  id: 'my-file-upload',  
  label: 'my file upload label',  
  helper_text: 'this is a helper text',  
  invalid_text: 'this is an invalid text',  
  required_text: 'this is a required text',  
  optional_text: 'this is an optional text',  
  disable: false,  
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
