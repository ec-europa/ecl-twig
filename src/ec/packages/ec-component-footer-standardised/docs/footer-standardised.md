# ECL Twig - EC Footer component

npm package: `@ecl-twig/ec-component-footer-standardised`

```shell
npm install --save @ecl-twig/ec-component-footer-standardised
```

## Parameters

- "sections" (array of objects) (default: []):
  - "title" (optional) (string) OR ( object with Link component in property )
  - "title_class_name" (optional) (string) (default: '')
  - "description" (optional) (string) (default: '')
  - "content_before" (optional) (string) (default: '')
  - "list_class_name" (optional) (string) (default: '')
  - "links" (optional) (array of Link components ) (default: []):
- "extra_classes" (optional) (string) (default: '') Extra classes (space separated) for the icon
- "extra_attributes" (optional) (array) (default: []) Extra attributes for icon
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-site-footer-standardised/footer-standardised.html.twig' with {
  sections: [
    {
      key: 'section 1',
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
        key: 'section 2',
        title: 'Contact us',
        title_class_name: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Contact information of the DG',
            href: '/example',
          },
        ],
      },
      {
        key: 'section 3',
        title: 'Follow us on',
        title_class_name: 'ecl-footer-standardised__title--separator',
        links: [
          {
            label: 'Facebook',
            href: '/example',
            icon_position: 'before',
            icon: {
              shape: 'branded--facebook',
              size: 'xs',
            },
          },
          ...
        ],
        list_class_name: 'ecl-footer-standardised__list--inline',
      },
      {
        key: 'section 4',
        content_before: 'More information on:',
        links: [
          {
            label: 'Related link 1',
            href: '/example',
          },
         ...
        ],
        list_class_name: 'ecl-footer-standardised__list--condensed',
      },
      ...
    ]
  }
%}
```
