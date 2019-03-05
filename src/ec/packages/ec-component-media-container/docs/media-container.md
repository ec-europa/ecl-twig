# ECL Twig - EC Media container component

npm package: `@ecl-twig/ec-component-media-container`

```shell
npm install --save @ecl-twig/ec-component-media-container
```

## Tag

### Parameters

- "description" (string) (default: '')

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/media-container.html.twig' with { 
  description: 'A description for this component'
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
