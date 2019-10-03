import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import breadcrumbDataSimple from '@ecl/ec-specs-breadcrumb/demo/data-simple';
import breadcrumbDataLong from '@ecl/ec-specs-breadcrumb/demo/data';

function formatLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

describe('EC - Breadcrumb', () => {
  const template = 'ec-component-breadcrumb/breadcrumb.html.twig';
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Simple', () => {
    const data = {
      links: breadcrumbDataSimple.items.map(formatLink),
      icon_file_path: defaultIconPath,
      navigation_text: breadcrumbDataSimple.label,
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
      links: breadcrumbDataLong.items.map(formatLink),
      icon_file_path: defaultIconPath,
      navigation_text: breadcrumbDataLong.label,
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
