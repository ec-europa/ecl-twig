# ECL Twig - EC Menu Legacy

npm package: `@ecl-twig/ec-component-menu-legacy`

```shell
npm install --save @ecl-twig/ec-component-menu-legacy
```

## menuLegacy navigation

### Parameters

- "label" (string) (default: ''): visible on mobile
- "icon_path" (string) (default: ''): path to the icons svg
- "items" (array) (default: []): [{
  - "label" (string) - label of the link
  - "href" (string) - target of the link
  - "is_current" (boolean) (default: false) - does the menu contain the current page?
  - "children" (array) (default: [{}])
    - "title" (string) (default: '')
    - "items" (array) (default: [{}])
      - "label" (string): label of the link
      - "href" (string): target of the link
      - "is_current" (boolean) (default: false)
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format: [
  - "name" (string) (default: ''),
  - "value" (string) (optional)

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/menu-legacy.html.twig' with { 
  label: "Menu", 
  icon_path: '/static/media/icons.svg', 
  items: [ 
    {  
      label: "first menu item", 
      href: "node/101", 
      is_current: false, 
      children: [ 
        {  
          "title": "column 1", 
          "items": [ 
            {  
              label: "sub-menu column 1 link 1", 
              href: "#", 
              is_current: false 
            } 
            ... 
        ] 
      } 
      ... 
      ], 
    } 
  ], 
  extra_classes: "ecl-menu-legacy", 
  extra_attributes: [ 
    { 
      name:"data-ecl-menu-legacy-menu", 
      value:"true" 
    }, 
    ... 
    ] 
} %} 
```
