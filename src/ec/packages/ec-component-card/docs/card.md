# ECL Twig - EC Card component

npm package: `@ecl-twig/ec-component-card`

```shell
npm install --save @ecl-twig/ec-component-card
```

## Card

### Parameters

- "card" (associative array) (default: predefined structure): format:
  - type: 'default', (can be 'default','tile')
  - description: '',
  - title: {}, (associative array - predefined structure based on Link component. If Card is a tile, set only label property),
  - infos: [], (array of infos) (default: predefined structure):
    - label: '' (string) (default: '') Label of info
    - icon: {} (associative array) (default: predefined structure) Icon for info, based on Icon component structure
  - tags: [], (array of tags) (default: []) List of tags based on Tag component structure
  - links: [], (array of links) (default: []) List of links based on Link component structure
  - image: '', (url to background image if available)
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example full card:

```twig
{% include 'path/to/card.html.twig' with {
  card: {
    description: 'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
    image: 'https://v2--europa-component-library.netlify.com/example-image.jpg',
    title: {
      type: 'standalone',
      path: '/example-path',
      label: 'Better regulation'
    },
    infos: [
      label: '2018/10/22',
      icon: {
        type: 'general',
        name: 'calendar',
        path: '/static/icons.svg'
      },
    ],
    tags: [
      {
        tag: {
          label: 'Tag 1',
          path: '/example-1',
        },
      },
    ],
  },
  extra_classes: 'my-extra-class-1 my-extra-class-2',
  extra_attributes: [{ name: 'data-test', value: 'data-test-value' },{ name: 'data-test-1', value: 'data-test-value-1' }]
} %}
```

### Example tile:
```twig
{% include 'path/to/card.html.twig' with {
  card: {
    description: 'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
    type: 'tile',
    title: {
      label: 'Better regulation'
    },
    links: [
      {
        label: 'link 1',
        path: '/example-1',
      },
    ],
  },
  extra_classes: 'my-extra-class-1 my-extra-class-2',
  extra_attributes: [{ name: 'data-test', value: 'data-test-value' },{ name: 'data-test-1', value: 'data-test-value-1' }]
} %}
```
