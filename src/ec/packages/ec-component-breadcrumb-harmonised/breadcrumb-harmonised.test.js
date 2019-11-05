import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import { dataSimple, dataLong } from './demo/data';

describe('EC - Breadcrumb Core', () => {
  const template =
    '@ecl-twig/ec-component-breadcrumb-harmonised/breadcrumb-harmonised.html.twig';
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Simple', () => {
    const data = {
      links: dataSimple.links,
      icon_file_path: defaultIconPath,
      navigation_text: dataSimple.label,
      ellipsis_label: 'Click to expand',
    };

    test(`renders correctly`, () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('Long', () => {
    const data = {
      extra_attributes: [
        { name: 'data-ecl-auto-init', value: 'BreadcrumbCore' },
      ],
      links: dataLong.links,
      icon_file_path: defaultIconPath,
      navigation_text: dataLong.label,
      ellipsis_label: 'Click to expand',
    };

    test(`renders correctly`, () => {
      expect.assertions(1);
      return expect(render(data)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(data, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });
});
