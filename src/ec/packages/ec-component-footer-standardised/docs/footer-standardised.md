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
      title: 'About us',
      title_class_name: 'ecl-footer-standardised__title--separator',
      links: [
        {
          label: 'Information about the DG',
          href: '/example',
        },
      ],
    },
    {
      key: 'section 4',
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
        {
          label: 'Twitter',
          href: '/example',
          icon_position: 'before',
          icon: {
            shape: 'branded--twitter',
            size: 'xs',
          },
        },
        {
          label: 'Linkedin',
          href: '/example',
          icon_position: 'before',
          icon: {
            shape: 'branded--linkedin',
            size: 'xs',
          },
        },
      ],
      list_class_name: 'ecl-footer-standardised__list--inline',
    },
    {
      key: 'section 5',
      title: 'Related sites',
      title_class_name: 'ecl-footer-standardised__title--separator',
      links: [
        {
          label: 'Related link 1',
          href: '/example',
        },
        {
          label: 'Related link 2',
          href: '/example',
        },
        {
          label: 'Related link 3',
          href: '/example',
        },
        {
          label: 'Related link 4',
          href: '/example',
        },
        {
          label: 'Related link 5',
          href: '/example',
        },
      ],
    },
    {
      key: 'section 6',
      content_before: 'More information on:',
      links: [
        {
          label: 'Class name 1',
          href: '/example',
        },
        {
          label: 'Class name 2',
          href: '/example',
        },
      ],
      list_class_name: 'ecl-footer-standardised__list--condensed',
    },
    {
      key: 'section 7',
      title: {
        label: 'European Commission',
        href: 'https://ec.europa.eu/',
      },
    },
    {
      key: 'section 8',
      links: [
        {
          label: 'Contact the European Commission',
          href: '/example',
        },
        {
          label: 'Follow the European Commission on social media',
          href: '/example',
          icon_position: 'after',
          icon: {
            shape: 'ui--external',
            size: 'xs',
          },
        },
        {
          label: 'Resources for partners',
          href: '/example',
        },
      ],
    },
    {
      key: 'section 9',
      links: [
        {
          label: 'Language policy',
          href: '/example',
        },
        {
          label: 'Cookies',
          href: '/example',
        },
        {
          label: 'Privacy policy',
          href: '/example',
        },
        {
          label: 'Legal notice',
          href: '/example',
        },
        {
          label: 'Brexit content disclaimer',
          href: '/example',
        },
      ],
    },
  ], 
} %}
```
