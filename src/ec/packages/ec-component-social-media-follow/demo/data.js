import defaultSprite from '@ecl/ec-resources-social-icons/dist/sprites/icons-social.svg';

const demoData = {
  description:
    'Follow the latest progress and learn more about getting involved.',
  links: [
    {
      path: '/example',
      label: 'Twitter',
      type: 'standalone',
      icon_position: 'before',
      icons: [
        {
          name: 'twitter',
          size: 'xl',
          path: defaultSprite,
        },
        {
          name: 'twitter_hover',
          size: 'xl',
          path: defaultSprite,
        },
      ],
    },
    {
      path: '/example',
      label: 'Facebook',
      type: 'standalone',
      icon_position: 'before',
      icons: [
        {
          name: 'facebook',
          size: 'xl',
          path: defaultSprite,
        },
        {
          name: 'facebook_hover',
          size: 'xl',
          path: defaultSprite,
        },
      ],
    },
    {
      path: '/example',
      label: 'Google+',
      type: 'standalone',
      icon_position: 'before',
      icons: [
        {
          name: 'gplus',
          size: 'xl',
          path: defaultSprite,
        },
        {
          name: 'gplus_hover',
          size: 'xl',
          path: defaultSprite,
        },
      ],
    },
    {
      path: '/example',
      label: 'Linkedin',
      type: 'standalone',
      icon_position: 'before',
      icons: [
        {
          name: 'linkedin',
          size: 'xl',
          path: defaultSprite,
        },
        {
          name: 'linkedin_hover',
          size: 'xl',
          path: defaultSprite,
        },
      ],
    },
    {
      path: '/example',
      label: 'Other social networks',
      type: 'standalone',
    },
  ],
};

export default demoData;
