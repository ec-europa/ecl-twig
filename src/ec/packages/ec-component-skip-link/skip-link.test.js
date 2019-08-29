import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Skip Link', () => {
  const template = path.resolve(__dirname, './skip-link.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultDataStructure = {
    label: '',
    href: '',
  };

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const options = merge(defaultDataStructure, {
        label: 'Skip to main content',
        href: '#top',
      });

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  test('renders correctly', () => {
    expect.assertions(1);
    return expect(render()).resolves.toMatchSnapshot();
  });
});
