import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Card', () => {
  const template = path.resolve(__dirname, './card.html.twig');
  const defaultIconPath = 'static/icons.svg';
  const defaultDataStructure = {
    card: {
      description:
        'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
      image:
        'https://v2--europa-component-library.netlify.com/example-image.jpg',
      title: {
        type: 'standalone',
        path: '/example',
        label: 'Better regulation',
      },
      infos: [
        {
          label: '2018/10/22',
          icon: {
            type: 'general',
            name: 'calendar',
            path: defaultIconPath,
          },
        },
        {
          label: 'Luxembourg',
          icon: {
            type: 'general',
            name: 'location',
            path: defaultIconPath,
          },
        },
      ],
      tags: [
        {
          tag: {
            label: 'Tag 1',
            path: '/example-1',
          },
        },
        {
          tag: {
            label: 'Tag 1',
            path: '/example-1',
          },
        },
        {
          tag: {
            label: 'Tag 1',
            path: '/example-1',
          },
        },
      ],
    },
  };

  describe('Default', () => {
    test(`- default card renders correctly`, done => {
      expect.assertions(1);

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Tile', () => {
    test(`- tile card renders correctly`, done => {
      expect.assertions(1);

      defaultDataStructure.card.type = 'tile';
      defaultDataStructure.card.title = {
        label: 'Better regulation',
      };
      defaultDataStructure.card.image = '';
      defaultDataStructure.card.infos = [];
      defaultDataStructure.card.tags = [];
      defaultDataStructure.card.links = [
        {
          label: 'link 1',
          path: '/example-1',
        },
        {
          label: 'link 2',
          path: '/example-2',
        },
      ];

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
