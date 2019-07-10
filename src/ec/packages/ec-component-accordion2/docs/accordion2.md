# ECL Twig - EC Accordion 2

npm package: `@ecl-twig/ec-component-accordion2`

```shell
npm install --save @ecl-twig/ec-component-accordion2
```

## Accordion 2

### Parameters

- "items" (array) (default: []): format:
  - "id" (string) (default: '') Used for binding of toggable elements
  - "level" (string) (default: 3)
  - "toggle": (predefined structure): see Button component
    - "label": (string) (default: '')
    - "icon": (associative array) (default: {path: '', "type": 'ui', name: 'plus', size: 'm'}): format:
      - "path" (string) (default: '')
  - "content": (string) (default: '')
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format:
  - "name" (string) (default: '')
  - "value" (string) (default: '')

### Example :

<!-- prettier-ignore -->
```twig
{% include 'path/to/accordion2.html.twig' with {
  items: [
    {
      id: 'accordion-example',
      level: 3,
      toggle: {
        label:
          'Delivery of last pending proposals, a common Destiny of unity, the hour of European Democracy',
        icon: {
          path: 'static/icons.svg',
        },
      },
      content:
        'The College of Commissioners held today the first weekly meeting of 2019 which was devoted to discussing the challenges of this new year. Commissioners used the opportunity to take stock and discuss the year ahead, including the European elections in May and other important milestones ahead.',
    },
    ...
  ]
} %}
```
