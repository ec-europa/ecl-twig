import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Tag', () => {
  const template = path.resolve(__dirname, './tag.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';
  const defaultDataStructure = {
    tag: {
      path: '',
      type: '',
      label: '',
    },
    default_icon_path: defaultIconPath,
  };

  describe('Link', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      defaultDataStructure.tag.type = 'link';
      defaultDataStructure.tag.label = 'Link tag';
      defaultDataStructure.tag.path = '/example-path';

      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('Button', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      defaultDataStructure.tag.type = 'button';
      defaultDataStructure.tag.label = 'Button tag';

      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('Removable', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      defaultDataStructure.tag.type = 'removable';
      defaultDataStructure.tag.label = 'Removable tag';
      defaultDataStructure.default_icon_path = defaultIconPath;

      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });
});
