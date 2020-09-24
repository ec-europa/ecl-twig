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
- **"nested"** (boolean) Whether it is a nested layout or not
- **"highlight"** (object) (default: {}) The item to show as an highlight
  - "component" (string) (default: '') Name of the component to be included
  - "title" (string) (default: '') The title for the highlight block
  - "item" (object) or (array) (default: {}) data input for the highlighted item(s)
  - "sub_component" (default: {component}) When nesting layouts this is the component to be included
  - "extra_data" (default: {}) To pass additional input when nesting layouts
- **"footer"** (object) (default: {}) The item to show in the bottom
  - "component" (string) (default: '') Name of the component to be included
  - "title" (string) (default: '') The title for the footer block
  - "item" (object) or (array) (default: {}) data input for the footer item(s)
  - "sub_component" (default: {component}) When nesting layouts this is the component to be included
  - "extra_data" (default: {}) To pass additional input when nesting layouts
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
  title: 'Details', 
  grid: 12, 
  component: 'description-list', 
  columns_desktop: 2, 
  columns_mobile: 1, 
  spacing: 's', 
  highlight: { 
    title: 'Highlights', 
    component: 'layout', 
    sub_component: 'card', 
    extra_data: { 
      columns_desktop: 3, 
      columns_mobile: 1, 
    }, 
    item: [ 
      { 
        card: { 
          description: 
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.', 
          title: { 
            variant: 'standalone', 
            label: 'Better regulation', 
            level: 1, 
            path: '/example', 
            type: 'standalone', 
          }, 
          meta: ['Meta1', 'Meta2'], 
          image: { 
            alt: 'card image', 
            src: 
              'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg', 
          }, 
        }, 
      }, 
      { 
        card: { 
          description: 
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.', 
          title: { 
            variant: 'standalone', 
            label: 'The programming of EU\'s external assistance and development aid and the fragile balance of power bet ween EEAS and DG DEVCO', 
            level: 1, 
            path: '/example', 
            type: 'standalone', 
          },
          meta: ['Meta1', 'Meta2'], 
          image: { 
            alt: 'card image', 
            src:
              'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg', 
          }, 
        }, 
      }, 
      { 
        card: { 
          description: 
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.', 
          title: { 
            variant: 'standalone', 
            label: 'Who gets what', 
            level: 1, 
            path: '/example', 
            type: 'standalone', 
          }, 
          meta: ['Meta1', 'Meta2'], 
          image: { 
            alt: 'card image', 
            src: 
              'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg', 
          }, 
        }, 
      }, 
    ], 
  }, 
  items: [ 
    { 
      items: [ 
        { 
          term: 'Cabinets', 
          definition: 
            'Cabinets help Commissioners in carrying out their collegial and portfolio roles.', 
        }, 
        { 
          term: 'Commissioner', 
          definition: 
            'As part of the Commission\'s commitment to transparency, Commissioners and their members of Cabinet publish information on meetings held with organisations', 
        }, 
        { 
          term: 'Lobbies', 
          definition: 
            'The Commission maintains a register of interest groups that aim to influence citizens and other interest groups the possibility to track the activities of lobbyists.', 
        }, 
      ], 
      variant: 'horizontal', 
    }, 
    { 
      items: [ 
        { 
          term: 'European Commission', 
          definition:
            'The executive body of the European Union formed in 1967, which initiates action in the EU and mediates between member governments. Former name (until 1993): Commission of the European Communities', 
        }, 
        { 
          term: 'European Union', 
          definition: 
            'An association of European nations formed in 1993 for the purpose of achieving political and economic integration.', 
        }, 
        { 
          term: 'Citizen', 
          definition: 
            'A native or naturalized member of a state or nation who owes allegiance to its government and is entitled to its protection', 
        }, 
      ], 
      variant: 'horizontal', 
    }, 
  ], 
  footer: { 
    title: 'Documents', 
    component: 'layout', 
    sub_component: 'file', 
    extra_data: { 
      columns_desktop: '1', 
      columns_mobile: '1', 
    }, 
    item: [ 
      { 
        title: 'State of the Union 2019 brochure', 
        description: 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis. Donec maximus pharetra ex a ultricies.', 
        image: { 
          src:
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg', 
          alt: 'thumbnail alt', 
        }, 
        language: 'English', 
        meta: '(16.2 MB - PDF)', 
        icon: { 
          path: '/icons.svg', 
          type: 'general', 
          name: 'copy', 
          size: '2xl', 
        }, 
        download: { 
          link: { 
            label: 'Download', 
            path: '/example', 
            aria_label: 'Download file State of the Union 2019 brochure', 
          }, 
          icon: { 
            path: '/icons.svg', 
          }, 
        }, 
        detail_meta: ['Resource type', 'Publication date'], 
        variant: 'thumbnail', 
      }, 
      { 
        title: 'State of the Union 2018 brochure', 
        description: 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis. Donec maximus pharetra ex a ultricies.', 
        image: { 
          src: 
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg', 
          alt: 'thumbnail alt', 
        }, 
        language: 'English', 
        meta: '(16.2 MB - PDF)', 
        icon: { 
          path: '/icons.svg', 
          type: 'general', 
          name: 'copy', 
          size: '2xl', 
        }, 
        download: { 
          link: { 
            label: 'Download', 
            path: '/example', 
            aria_label: 'Download file State of the Union 2018 brochure', 
          }, 
          icon: { 
            path: '/icons.svg', 
          }, 
        }, 
        detail_meta: ['Resource type', 'Publication date'], 
        variant: 'thumbnail', 
      }, 
      { 
        title: 'State of the Union 2017 brochure', 
        description: 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur. Duis vitae pulvinar turpis. Donec maximus pharetra ex a ultricies.', 
        image: { 
          src: 
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg', 
          alt: 'thumbnail alt', 
        }, 
        language: 'English', 
        meta: '(16.2 MB - PDF)', 
        icon: { 
          path: '/icons.svg', 
          type: 'general', 
          name: 'copy', 
          size: '2xl', 
        }, 
        download: { 
          link: { 
            label: 'Download', 
            path: '/example', 
            aria_label: 'Download file State of the Union 2017 brochure', 
          }, 
          icon: { 
            path: '/icons.svg', 
          }, 
        }, 
        detail_meta: ['Resource type', 'Publication date'], 
        variant: 'thumbnail', 
      }, 
    ], 
  }, 
} %} 
```
