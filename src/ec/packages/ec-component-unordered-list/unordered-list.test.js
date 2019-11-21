import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import data from '@ecl/ec-specs-list/demo/data--text';
import dataLink from '@ecl/ec-specs-list/demo/data--link';
import dataLinkDivider from '@ecl/ec-specs-list/demo/data--link-divider';
import dataLinkNoBullet from '@ecl/ec-specs-list/demo/data--link-no-bullet';

describe('EC - Unordered list', () => {
  const template =
    '@ecl-twig/ec-component-unordered-list/ecl-unordered-list.html.twig';
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

      return expect(render(dataLinkNoBullet)).resolves.toMatchSnapshot();
    });

    test('renders correctly with links', () => {
      expect.assertions(1);

      return expect(render(dataLink)).resolves.toMatchSnapshot();
    });

    test('renders correctly with divider variant', () => {
      expect.assertions(1);

      return expect(render(dataLinkDivider)).resolves.toMatchSnapshot();
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
