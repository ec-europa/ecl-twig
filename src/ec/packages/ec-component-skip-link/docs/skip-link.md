# ECL Twig - EC Link component

npm package: `@ecl-twig/ec-component-skip-link`

```shell
npm install --save @ecl-twig/ec-component-skip-link
```

## Link

### Parameters

- "link" (associative array) (default: 'predefined structure below')
  - "label" (string) (default: '') - Content of link
  - "href" (string) (default: '') - href attribute

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/skip-link.html.twig' with { 
    label: 'Skip to main content',
    href: '#top',
} %}
```
