import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-standardised/demo/data';
import demoTitleContent from '@ecl/ec-specs-page-header-standardised/demo/data--title';
import demoMetaTitleContent from '@ecl/ec-specs-page-header-standardised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header-standardised/demo/data--meta-title-description';

function formatBreadcrumbLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

function formatPageHeaderStandardisedInfo(i) {
  const iconType = i.icon.split('--');
  const info = {
    text: i.text,
    icon: {
      type: iconType[0],
      name: iconType[1],
      path: 'static/icons.svg',
    },
  };

  return info;
}

function preparePageHeaderStandardisedData(data) {
  const output = {};

  output.breadcrumb = {
    links: breadcrumbContent.items.map(formatBreadcrumbLink),
    navigation_text: breadcrumbContent.label,
    icon_file_path: 'static/icons.svg',
  };

  output.title = data.title;

  if (data.description) {
    output.description = data.description;
  }

  if (data.meta) {
    output.meta = data.meta;
  }

  if (data.infos) {
    output.infos = data.infos.map(formatPageHeaderStandardisedInfo);
  }

  return output;
}

describe('EC - Page Header Standardised', () => {
  const template =
    '@ecl-twig/ec-component-page-header-standardised/page-header-standardised.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('title', () => {
    const data = preparePageHeaderStandardisedData(demoTitleContent);

    test(`- renders correctly`, () => {
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

  describe('meta-title', () => {
    const data = preparePageHeaderStandardisedData(demoMetaTitleContent);

    test(`- renders correctly`, () => {
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

  describe('meta-title-description', () => {
    const data = preparePageHeaderStandardisedData(
      demoMetaTitleDescriptionContent
    );

    test(`- renders correctly`, () => {
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
