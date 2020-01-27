import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import dataSimple from './demo/data--simple';
import dataLong from './demo/data';

describe('EC - Breadcrumb Harmonised', () => {
  const template =
    '@ecl-twig/ec-component-breadcrumb-harmonised/ecl-breadcrumb-harmonised.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Simple', () => {
    test(`renders correctly`, () => {
      expect.assertions(1);

      return expect(render(dataSimple)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSimple, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataSimple, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('Long', () => {
    test(`renders correctly`, () => {
      expect.assertions(1);

      return expect(render(dataLong)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataLong, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(dataLong, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });
});
