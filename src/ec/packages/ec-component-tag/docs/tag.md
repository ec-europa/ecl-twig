# ECL Twig - EC Tag component

npm package: `@ecl-twig/ec-component-tag`

```shell
npm install --save @ecl-twig/ec-component-tag
```

## Tag

### Parameters

- "tag" (associative array) (default: 'predefined structure below')
  - "path" (string) (default: '') - path/url for tag (if needed - only for type 'link')
  - "type" (string) (default: '') - type of tag (can be 'link', 'button', 'removable')
  - "label" (string) (default: '') - tag label
- "default_icon_path" (string) (default: '') - path for the icon image (need to render Icon component if tag is removable)
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

```twig
{% include 'path/to/tag.html.twig' with {
  tag: {
    type: 'removable',
    path: '/example',
    label: 'Tag 1'
  },
  default_icon_path: '/static/media/icons.cbfd6efe.svg',
  extra_classes: 'my-extra-class-1 my-extra-class-2',
  extra_attributes: [{ name: 'data-test', value: 'data-test-value' },{ name: 'data-test-1', value: 'data-test-value-1' }]
} %}
```
