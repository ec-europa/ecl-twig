# ECL-Twig Layout

npm package: `@ecl-twig/ec-component-layout`

```shell
npm install --save @ecl-twig/ec-component-layout
```

### Parameters

- **"component"** (string) (default: '')
- **"variant"** (string) (default: '') - carousel
- **"arrows"** (boolean) (default: false) Whether to show controls in the carousel
- **"visible_items"** (integer) (default: 1) Number of items visible in the carousel
- **"same_height"** (boolean) (default: false) Whether to enforce the same height for the items
- **"items"** (array) (default: [])
- **"highlighted_item"** (object) (default: {}) The item to show as an highlight
- **"columns_desktop"** (integer) (default: 1) Number of columns for desktops
- **"columns_mobile"** (integer) (default: 1) Number of columns for desktops
- **"spacing"** (string) (default: m) ECL spacing token (2xs, xs, s, m, l, xl, 2xl, 3xl, 4xl)
- **"grid"** (integer) (number of columns for the main container)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-layout/ecl-layout.html.twig' with { 
  extra_classes: 'extra_class_1 extra_class-2', 
  extra_attributes: [ 
    { 
      name: 'extra_attribute_1', 
      value: 'extra_attribute_value_1' 
    }, 
    { 
      name: 'extra_attribute_2', 
      value: 'extra_attribute_value_2' 
    } 
  ], 
} %}
```
