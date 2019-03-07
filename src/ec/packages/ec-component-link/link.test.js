import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Link', () => {
  const template = path.resolve(__dirname, './link.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';
  const defaultDataStructure = {
    link: {
      type: '',
      label: '',
      path: '/path',
    },
  };

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const options = merge(defaultDataStructure, {
        link: {
          type: 'default',
          label: 'Default link',
        },
      });

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('Standalone', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const options = merge(defaultDataStructure, {
        link: {
          type: 'standalone',
          label: 'Standalone link',
        },
      });

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon before', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const options = merge(defaultDataStructure, {
        link: {
          type: 'standalone',
          label: 'Standalone link with icon',
          icon_position: 'before',
        },
        icon: {
          type: 'ui',
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
        },
      });

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon after', () => {
    const options = merge(defaultDataStructure, {
      link: {
        type: 'standalone',
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: {
        type: 'ui',
        name: 'external',
        size: 'fluid',
        path: defaultIconPath,
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_classes: 'custom-link custom-link--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });
});
