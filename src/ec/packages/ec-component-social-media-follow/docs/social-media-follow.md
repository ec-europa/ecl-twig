# ECL Twig - EC Social Media Follow component

npm package: `@ecl-twig/ec-component-social-media-follow`

```shell
npm install --save @ecl-twig/ec-component-social-media-follow
```

## Social Media Follow

### Parameters

- "description" (string) (default: '')
- "variant" (string) (default: '') - Can be 'vertical'
- "links" (array) (default: []) - List of links to external social media. Each link consists of the following:
  - "path" (string) - The "href" attribute of the link
  - "label" (string) - Human-readable name of the link
  - "icons" (array) - List of icons used for normal and hover states. Each icon consists of the following:
    - "name" (string) - Icon name
    - "size" (string) - Size such as "xl"
    - "path" (string) - Path in terms of an SVG icon
    - "extra_classes" (string) - Class to toggle between normal and hover effects
- "extra_classes" (optional) (string) (default: '') - Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) - Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/social-media-follow.html.twig' with {
  description:
    'Follow the latest progress and learn more about getting involved.',
  links: [
    {
      path: '/example',
      label: 'Twitter',
      icons: [
        {
          name: 'twitter',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon',
        },
        {
          name: 'twitter_hover',
          size: 'xl',
          extra_classes: 'ecl-social-media-follow__icon-hover',
        },
      ],
    },
    {
      path: '/example',
      label: 'Other social networks',
    },
  ],
} %}
```
