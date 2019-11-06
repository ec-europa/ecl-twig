import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import sections from './demo/data';

describe('EC - Footer Standardised', () => {
  const template =
    '@ecl-twig/ec-component-footer-standardised/footer-standardised.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const options = sections;

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
