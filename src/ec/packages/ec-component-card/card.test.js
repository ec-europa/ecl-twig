import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Card', () => {
  const template = path.resolve(__dirname, './card.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Default', () => {
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
        image: {
          src:
            'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
          alt: 'Better regulation',
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

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Tile', () => {
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

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
