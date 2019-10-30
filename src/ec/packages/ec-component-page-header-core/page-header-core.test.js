import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import breadcrumbDataSimple from '@ecl/ec-specs-breadcrumb-core/demo/data-simple';

import pageHeaderCoreDataTitle from '@ecl/ec-specs-page-header-core/demo/data--title';
import pageHeaderCoreDataMetaTitle from '@ecl/ec-specs-page-header-core/demo/data--meta-title';
import pageHeaderCoreDataMetaTitleDescription from '@ecl/ec-specs-page-header-core/demo/data--meta-title-description';

function formatBreadcrumbLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

function formatpageHeaderCoreInfo(i) {
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

function preparepageHeaderCoreData(data) {
  const output = {};

  output.breadcrumb = {
    links: breadcrumbDataSimple.items.map(formatBreadcrumbLink),
    navigation_text: breadcrumbDataSimple.label,
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
    output.infos = data.infos.map(formatpageHeaderCoreInfo);
  }

  return output;
}

describe('EC - Page Header', () => {
  const template =
    '@ecl-twig/ec-component-page-header-core/page-header-core.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('title', () => {
    const data = preparepageHeaderCoreData(pageHeaderCoreDataTitle);

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
    const data = preparepageHeaderCoreData(pageHeaderCoreDataMetaTitle);

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
    const data = preparepageHeaderCoreData(
      pageHeaderCoreDataMetaTitleDescription
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
