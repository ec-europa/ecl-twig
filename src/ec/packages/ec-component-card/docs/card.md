# ECL Twig - EC Card component

npm package: `@ecl-twig/ec-component-card`

```shell
npm install --save @ecl-twig/ec-component-card
```

## Card

### Parameters

- "card" (associative array) (default: predefined structure below)
  - "type" (string) (default: 'default') - Card type (can be 'default','tile')
  - "description" (string) (default: '') - Description of card
  - "meta" (array) (default: []) - Meta's for the Card
  - "title" (associative array) (default: {}) - Predefined structure compatible with Link component. If Card type is a 'tile', only label property is required.
  - "image" (string) (default: '') - Url/path to background image (non required if Card type is a 'tile')
  - "tags" (array) (default: []): List of tags compatible with EC Tag component structure
  - "infos" (array) (default: []): List of infos. The format of each element in the array:
    - "label" (string) (default: ''): Label of info
    - "icon" (associative array) (default: {}): Predefined structure compatible with EC Icon
  - "links" (array) (default: []): List of links (required if Card type is a 'tile'). The format of each element in the array
    - "label" (string) (default: ''): Label of link
    - "path" (string) (default: ''): Link url (href attribute)
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the Card
- "extra_attributes" (optional) (array) (default: []) Extra attributes for Card
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example for default Card:

<!-- prettier-ignore -->
```twig
{% include 'path/to/card.html.twig' with { 
  card: { 
    type: 'default', 
    description: 'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.', 
    image: 'https://v2--europa-component-library.netlify.com/example-image.jpg', 
    title: { 
      type: 'standalone', 
      path:  '/example', 
      label: Better regulation', 
    }, 
    meta: [ 'Meta 1', 'Meta 2', 'Meta 3' ], 
    infos: [ 
      { 
        label: '2018/10/22', 
        icon: { 
          type: 'general', 
          name: 'calendar', 
          path: '/path-to-the-icon-file', 
        }, 
      }, 
      { 
        label: 'Luxembourg', 
        icon: { 
          type: 'general', 
          name: 'location', 
          path: '/path-to-the-icon-file', 
        }, 
      }, 
    ], 
    tags: [ 
      { 
        label: 'Tag 1', 
        path: '/example-1', 
      }, 
      { 
        label: 'Tag 2', 
        path: '/example-2', 
      }, 
      { 
        label: 'Tag 3', 
        path: '/example-3', 
      }, 
    ], 
  } 
} %}
```

### Example for tile Card:

<!-- prettier-ignore -->
```twig
{% include 'path/to/card.html.twig' with { 
  card: { 
    description: 'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views', 
    title: { 
      label: 'Better regulation', 
    }, 
    type: 'tile', 
    links: [ 
      { 
        label: 'link 1', 
        path: '/example-1', 
      }, 
      { 
        label: 'link 2', 
        path: '/example-2', 
      }, 
      { 
        label: 'link 3', 
        path: '/example-3', 
      }, 
    ] 
} %}
```
