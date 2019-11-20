# ECL Twig - EC Expandable component

npm package: `@ecl-twig/ec-component-expandable`

```shell
npm install --save @ecl-twig/ec-component-expandable
```

### Parameters:

- "id" (string) (default: '')
- "button" (predefined structure) : Button component structure
- "list" (object) (default: {})
  - "items" (array) (default: [])
    - "label" (string) (default: '') link html markup
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated)
- "extra_attributes" (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-dropdown-legacy/ecl-dropdown-legacy.html.twig' with
{{}}
%}
```
