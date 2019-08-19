# ECL Twig - EC Search Form

npm package: `@ecl-twig/ec-component-search-form`

```shell
npm install --save @ecl-twig/ec-component-search-form
```

## Search Form

### Parameters

- "text_input" (associative array) default: A predefined structure for EC Text Input
- "button" (associative array) default: A predefined structure for EC Button
- "extra_blocks" (optional) (array) (default: []) Extra inputs for the form
  - "content" (block) input html markup
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the form
- "extra_attributes" (optional) (array) (default: []) Extra attributes for the form
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/icon.html.twig' with { 
  text_input: { 
    id: 'input-search', 
    name: 'search', 
    extra_classes: 'ecl-search-form__text-input' 
  }, 
  button: { 
    variant: 'search', 
    icon: { 
      type: 'general', 
      name: 'search', 
      path: '/path-to-the-icon-file', 
    }, 
    label: 'Search', 
    extra_classes: 'ecl-search-form__button' 
  }, 
  extra_blocks: [ 
    { 
      content: 
        '<input type="hidden" id="custId" name="custId" value="1">', 
    } 
  ... 
  ] 
} %}
```
