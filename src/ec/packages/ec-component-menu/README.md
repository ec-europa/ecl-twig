# ECL Twig - EC Menu

npm package: `@ecl-twig/ec-component-menu`

```shell
npm install --save @ecl-twig/ec-component-menu
```

### Parameters

- **"group"** (string) (default: 'group1'): 'group1' or 'group2'
- **"icon_path"** (string) (default: ''): Path to the icon sprite
- **"items"** (associative array) (default: {}): The menu items - format:
  "label": (string) (default: '')
  "path": (string) (default: '')
  "is_current": (boolean) (optional),
  - "children": (associative array) (optional)
    "label": (string) (default: '')
    "path": (string) (default: '')
    "is_current": (boolean) (optional),
- **"site_name"** (string) (default: ''): Name of the website
- **"toggle_label_close"** (string) (default: ''): Label of the toggler
- **"toggle_label_open"** (string) (default: ''): Label of the toggler
- **"toggle_path"** (string) (default: ''): Href attribute of the toggler
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-menu/ecl-menu.html.twig' with { 
  label: "Menu", 
  icon_path: '/icons.svg', 
  site_name: 'Site name', 
  toggle_label_close: 'Close', 
  toggle_label_open: 'Open', 
  toggle_path: './example.com', 
  items: [ 
    { 
      label: "Menu item", 
      path: "example", 
      is_current: false, 
      children: [ 
        {
          label: "Item 1.1",
          path: "/example"
        },
        ...
        ] 
      } 
      ... 
      ], 
    } 
  ], 
  extra_classes: "ecl-menu-extra-class, 
  extra_attributes: [ 
    { 
      name:"data-ecl-menu", 
    }, 
    ... 
    ] 
} %} 
```
