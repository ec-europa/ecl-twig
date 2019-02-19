/* eslint-disable import/no-extraneous-dependencies */
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

export const backToTop = {
  link: {
    label: 'Go to top',
    path: '#top',
  },
  icon: {
    path: defaultSprite,
    size: 'fluid',
  },
};

export const identity = {
  title: 'Site identification',
  follow: {
    label: 'Follow us:',
    links: [
      {
        link: {
          label: 'Facebook',
          path: '/example',
          icon_position: 'before',
        },
        icon: {
          path: defaultSprite,
          type: 'branded',
          name: 'facebook',
        },
      },
      {
        link: {
          label: 'Twitter',
          path: '/example',
          icon_position: 'before',
        },
        icon: {
          path: defaultSprite,
          type: 'branded',
          name: 'twitter',
        },
      },
      {
        link: {
          label: 'Other social networks',
          path: '/example',
          icon_position: 'before',
        },
        icon: {
          path: defaultSprite,
          type: 'ui',
          name: 'external',
        },
      },
    ],
  },
  info: [
    {
      link: {
        label: 'Contact',
        path: '/example',
      },
    },
    {
      link: {
        label: 'Sitemap',
        path: '/example',
      },
    },
    {
      link: {
        label: 'Lorem ipsum',
        path: '/example',
      },
    },
    {
      link: {
        label: 'Lorem ipsum dolor sit',
        path: '/example',
      },
    },
  ],
};

export const sections = [
  {
    title: 'European Commission',
    links: [
      {
        link: {
          label: 'Commission and its priorities',
          path: '/example',
        },
      },
      {
        link: {
          label: 'Policies, information and services',
          path: '/example',
        },
      },
    ],
  },
  {
    title: 'Follow the European Commission',
    links: [
      {
        link: {
          label: 'Facebook',
          path: '/example',
          icon_position: 'before',
        },
        icon: {
          path: defaultSprite,
          type: 'branded',
          name: 'facebook',
        },
      },
      {
        link: {
          label: 'Twitter',
          path: '/example',
          icon_position: 'before',
        },
        icon: {
          path: defaultSprite,
          type: 'branded',
          name: 'twitter',
        },
      },
      {
        link: {
          label: 'Other social networks',
          path: '/example',
          icon_position: 'before',
        },
        icon: {
          path: defaultSprite,
          type: 'ui',
          name: 'external',
        },
      },
    ],
  },
  {
    title: 'European Union',
    links: [
      {
        link: {
          label: 'European Union',
          path: '/example',
          icon_position: 'after',
        },
        icon: {
          path: defaultSprite,
          type: 'ui',
          name: 'external',
        },
      },
      {
        link: {
          label: 'EU institutions',
          path: '/example',
          icon_position: 'after',
        },
        icon: {
          path: defaultSprite,
          type: 'ui',
          name: 'external',
        },
      },
    ],
  },
];

export const common = [
  {
    link: {
      label: "About the Commission's new web presence",
      path: '/example',
    },
  },
  {
    link: {
      label: 'Language policy',
      path: '/example',
    },
  },
  {
    link: {
      label: 'Resources for partners',
      path: '/example',
    },
  },
  {
    link: {
      label: 'Cookies',
      path: '/example',
    },
  },
  {
    link: {
      label: 'Privacy policy',
      path: '/example',
    },
  },
  {
    link: {
      label: 'Legal notice',
      path: '/example',
    },
  },
  {
    link: {
      label: 'Contact',
      path: '/example',
    },
  },
];
