# ECL Twig - EC Lnguage List component

npm package: `@ecl-twig/ec-component-language-list`

```shell
npm install --save @ecl-twig/ec-component-language-list
```

## Language list overlay

### Parameters

- "items" (array) (default: []): array of link items
  - "lang" (string) (default: '')
  - "label" (string) (default: '')
  - "path" (string) (default: '')
  - "active (boolean) (default: false)
- "overlay" (boolean) (default: false): is the list an overlay?
- "icon_path" (string) (default: ''): file containing the svg icons
- "close_label (string) (default: ''): label of close button (overlay only)
- "title" (string) (default: ''): title of the page (overlay only)
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/language-list.html.twig' with { 
  items: { 
    { lang: 'bg', label: 'български', path: '/example' }, 
    { lang: 'es', label: 'español', path: '/example' }, 
    ... 
  }, 
  overlay: true, 
  close_label: 'Close', 
  title: 'Select your language', 
  icon_path: /path-to-the-icon-file, 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' }, 
    { name: 'data-test-1', value: 'data-test-value-1' } 
  ] 
} %}
```
