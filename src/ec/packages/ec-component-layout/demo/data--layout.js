const data = {
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
          tags: [
            {
              label: 'tag 1',
              path: '/example',
            },
            {
              label: 'tag 2',
              path: '/example',
            },
            {
              label: 'tag 3',
              path: '/example',
            },
          ],
          image: {
            alt: 'card image',
            src:
              'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          },
          infos: [
            {
              icon: {
                size: 'xs',
                path: '/icons.svg',
                name: 'calendar',
                type: 'general',
              },
              label: '2018/10/22',
            },
            {
              icon: {
                size: 'xs',
                path: '/icons.svg',
                name: 'location',
                type: 'general',
              },
              label: 'Luxembourg',
            },
          ],
        },
      },
      {
        card: {
          description:
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
          title: {
            variant: 'standalone',
            label:
              "The programming of EU's external assistance and development aid and the fragile balance of power bet ween EEAS and DG DEVCO",
            level: 1,
            path: '/example',
            type: 'standalone',
          },
          meta: ['Meta1', 'Meta2'],
          tags: [
            {
              label: 'tag 1',
              path: '/example',
            },
            {
              label: 'tag 2',
              path: '/example',
            },
            {
              label: 'tag 3',
              path: '/example',
            },
          ],
          image: {
            alt: 'card image',
            src:
              'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          },
          infos: [
            {
              icon: {
                size: 'xs',
                path: '/icons.svg',
                name: 'calendar',
                type: 'general',
              },
              label: '2018/10/22',
            },
            {
              icon: {
                size: 'xs',
                path: '/icons.svg',
                name: 'location',
                type: 'general',
              },
              label: 'Luxembourg',
            },
          ],
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
          infos: [
            {
              icon: {
                size: 'xs',
                path: '/icons.svg',
                name: 'calendar',
                type: 'general',
              },
              label: '2018/10/22',
            },
            {
              icon: {
                size: 'xs',
                path: '/icons.svg',
                name: 'location',
                type: 'general',
              },
              label: 'Luxembourg',
            },
          ],
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
            "As part of the Commission's commitment to transparency, Commissioners and their members of Cabinet publish information on meetings held with organisations",
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
};

export default data;
