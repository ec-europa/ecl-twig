# ECL Twig - EC Footer component

npm package: `@ecl-twig/ec-component-footer-standardised`

```shell
npm install --save @ecl-twig/ec-component-footer-standardised
```

## Parameters

- "sections" (array of objects) (default: [])
  - "title" (optional) (string) OR (object with Link component in property)
  - "title_class_name" (optional) (string) (default: '')
  - "description" (optional) (string) (default: '')
  - "content_before" (optional) (string) (default: '')
  - "list_class_name" (optional) (string) (default: '')
  - "links" (optional) (array of Link components) (default: [])
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-footer-standardised/ecl-footer-standardised.html.twig' with { 
  sections: [ 
    { 
      title: { 
        link: { 
          label: "Site name", 
          path: "/example" 
        } 
      }, 
      description: 
        'This site is managed by the Directorate-General for "DG identification"', 
      }, 
      { 
        title: 'Contact us', 
        title_class_name: 'ecl-footer-standardised__title--separator', 
        links: [ 
          { 
            link: { 
              label: 'Contact information of the DG', 
              path: '/example', 
            }, 
          }, 
        ], 
      }, 
      { 
        title: 'Follow us on', 
        title_class_name: 'ecl-footer-standardised__title--separator', 
        links: [ 
          { 
            link: { 
              label: 'Facebook', 
              path: '/example', 
              icon_position: 'before', 
              icon: { 
                path: '/path-to-the-icon-file', 
                type: 'branded', 
                name: 'facebook', 
                size: 'xs', 
              }, 
            }, 
            ... 
          }, 
        ], 
        list_class_name: 'ecl-footer-standardised__list--inline', 
      }, 
      { 
        content_before: 'More information on:', 
        links: [ 
          { 
            link: { 
              label: 'Related link 1', 
              path: '/example', 
            }, 
            ... 
          }, 
        ], 
        list_class_name: 'ecl-footer-standardised__list--condensed', 
      }, 
      ... 
    ] 
  } 
%}
```
