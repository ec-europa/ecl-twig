import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Card', () => {
  const template = path.resolve(__dirname, './card.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const data = {
        card: {
          title: {
            type: 'standalone',
            path: '/example',
            label: 'Better regulation',
          },
          description:
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
          meta: ['Meta 1', 'Meta 2', 'Meta 3'],
          image:
            'https://v2--europa-component-library.netlify.com/example-image.jpg',
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
              label: 'Tag 1',
              path: '/example-1',
            },
            {
              label: 'Tag 2',
              path: '/example-2',
            },
            {
              label: 'Tag 3',
              path: '/example-3',
            },
          ],
        },
      };

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('Tile', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const data = {
        card: {
          description:
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.',
          title: {
            label: 'Better regulation',
          },
          type: 'tile',
          links: [
            {
              label: 'link 1',
              path: '/example-1',
            },
            {
              label: 'link 2',
              path: '/example-2',
            },
            {
              label: 'link 3',
              path: '/example-3',
            },
          ],
        },
      };

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });
});
