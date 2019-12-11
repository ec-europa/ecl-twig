# ECL Twig - EC Menu Harmonised

npm package: `@ecl-twig/ec-component-menu-harmonised`

```shell
npm install --save @ecl-twig/ec-component-menu-harmonised
```

### Parameters

- **"icon_path"** (string) (default: ''): Path to the icon sprite
- **"items"** (associative array) (default: {}): The menu items - format:
  - "link": (object)
    "label": (string) (default: '')
    "path": (string) (default: '')
    "is_home_link": (boolean) (optional),
  - "children": (associative array) (optional)
    "link": (object),
    "label": (string) (default: '')
    "path": (string) (default: '')
- **"site_name"** (string) (default: ''): Name of the website
- **"toggle_label_close"** (string) (default: ''): Label of the toggler
- **"toggle_label_open"** (string) (default: ''): Label of the toggler
- **toggle_path"** (string) (default: ''): Href attribute of the toggler
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated) for the nav element
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes for the nav element
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (optional) (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-menu-harmonised/ecl-menu-harmonised.html.twig' with { 
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
          "title": "column 1", 
          "items": [ 
            {
              link: {
                label: "link 1", 
                path: "#", 
                is_current: false 
              } 
            } 
          ... 
        ] 
      } 
      ... 
      ], 
    } 
  ], 
  extra_classes: "ecl-menu-harmonised", 
  extra_attributes: [ 
    { 
      name:"data-ecl-menu-harmonised-menu", 
    }, 
    ... 
    ] 
} %} 
```
