import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import data from '@ecl/ec-specs-list/demo/data--text';

describe('EC - Unordered list', () => {
  const template =
    '@ecl-twig/ec-component-unordered-list/unordered-list.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
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

    test('renders correctly with no-bullet variant', () => {
      expect.assertions(1);

      const noBullet = merge(data, {
        variant: 'no-bullet',
      });

      return expect(render(noBullet)).resolves.toMatchSnapshot();
    });

    test('renders correctly with divider variant', () => {
      expect.assertions(1);

      const divider = merge(data, {
        variant: 'divider',
      });

      return expect(render(divider)).resolves.toMatchSnapshot();
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
