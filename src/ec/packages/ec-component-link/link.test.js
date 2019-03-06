import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

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

      defaultDataStructure.link.type = 'default';
      defaultDataStructure.link.label = 'Default link';

      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('Standalone', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      defaultDataStructure.link.type = 'standalone';
      defaultDataStructure.link.label = 'Standalone link';

      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon before', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      defaultDataStructure.link.type = 'standalone';
      defaultDataStructure.link.label = 'Standalone link with icon';
      defaultDataStructure.link.icon_position = 'before';
      defaultDataStructure.icon = {
        type: 'ui',
        name: 'external',
        size: 'fluid',
        path: defaultIconPath,
      };

      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon after', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      defaultDataStructure.link.type = 'standalone';
      defaultDataStructure.link.label = 'Standalone link with icon';
      defaultDataStructure.link.icon_position = 'after';
      defaultDataStructure.icon = {
        type: 'ui',
        name: 'external',
        size: 'fluid',
        path: defaultIconPath,
      };

      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });
});
