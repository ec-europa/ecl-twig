# ECL Twig - EC Menu Legacy

npm package: `@ecl-twig/ec-component-menu-legacy`

```shell
npm install --save @ecl-twig/ec-component-menu-legacy
```

## menuLegacy navigation

### Parameters

- "label" (string) (default: ''): visible on mobile
- "items" (array) (default: []): [{
  - "label" (string) - label of the link
  - "href" (string) - target of the link
  - "isCurrent" (boolean) (default: false) - does the menu contains the current page?
  - "children" (array) (default: [{}])
    - "title" (string) [optional](default:)
    - "items" (array) (default: [{}])
      - "label" (string): label of the link
      - "href" (string): target of the link
      - "isCurrent" (boolean) (default: false)
- "extra_classes" (string) (default: '')
- "extra_attributes" (array) (default: []): format: [
  - "name" (string) (default: ''),
  - "value" (string) (default: '')

### Example:

<!-- prettier-ignore -->
```twig
{% include 'path/to/menu-legacy.html.twig' with {  
  label: "Menu",  
  items: [  
    {  
      label: "first menu item",  
      href: "node/101",  
      isCurrent: false,  
      children: [  
        {  
          "title": "column 1",  
          "items": [  
            {  
              label: "sub-menu column 1 link 1",  
              href: "#",  
              isCurrent: false  
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
