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
  - "href" (string) - Namely the same attribute
  - "label" (string) - Human-readable name of the link
  - "iconPosition" (string) - Whether the icon is expected to be "before" or "after"
  - "variant" (string) - Link variant, usually "standalone" is default.
  - "icon" (array) - List of icons used for normal and hover states. Each icon consists of the following:
    - "shape" (string) - Icon name
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
      href: '/example',
      label: 'Twitter',
      variant: 'standalone',
      iconPosition: 'before',
      icon: [
        {
          shape: 'twitter',
          size: 'xl',
        },
        {
          shape: 'twitter_hover',
          size: 'xl',
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
