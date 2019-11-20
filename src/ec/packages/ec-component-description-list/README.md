# ECL Twig - EC Description list component

npm package: `@ecl-twig/ec-component-description-list`

```shell
npm install --save @ecl-twig/ec-component-description-list
```

## Link

### Parameters

- "items" (array) (default: [])
  - "term" (string or array of string)
  - "definition" (string or array of string)
- "variant" (optional) (string) (default: '') Modifier of the component
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated)
- "extra_attributes" (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-description-list/ecl-description-list.html.twig' with 
{{}}
%}
```
