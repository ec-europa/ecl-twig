# ECL Twig - EC Media container component

npm package: `@ecl-twig/ec-component-media-container`

```shell
npm install --save @ecl-twig/ec-component-media-container
```

## Tag

### Parameters

- "description" (string) (default: '') - A caption to be shown under the media,
- "image" (string) (default: '') The path to the image,
- "alt" (string) (default: '') The alternate text for the image,
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the component,
- "extra_attributes" (optional) (array) (default: []) Extra attributes for the component.

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/media-container.html.twig' with { 
  description: 'A description for this image', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  image: '/path/to/your/image', 
  alt: 'An alternate text', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' },  
    { name: 'data-test-1', value: 'data-test-value-1' }  
  ] 
} %}
```
