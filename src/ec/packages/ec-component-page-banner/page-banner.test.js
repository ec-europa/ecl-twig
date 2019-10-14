import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import bannerDataDefault from '@ecl/ec-specs-page-banner/demo/data--default';
import bannerDataImage from '@ecl/ec-specs-page-banner/demo/data--image';
import bannerDataImageShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';
import bannerDataPrimary from '@ecl/ec-specs-page-banner/demo/data--primary';
import bannerDataAlignLeft from '@ecl/ec-specs-page-banner/demo/data--align-left';

function formatBanner(b) {
  const iconType = b.link.icon.shape.split('--');
  const banner = {
    type: b.variant,
    title: b.title,
    description: b.description,
    link: {
      link: {
        label: b.link.label,
        icon_position: 'after',
      },
      icon: {
        type: iconType[0],
        name: iconType[1],
        transform: b.link.icon.transform,
        size: b.link.icon.size,
        path: 'static/icons.svg',
      },
    },
    centered: b.isCentered,
  };

  if ('image' in b) {
    banner.image = 'https://v2--europa-component-library.netlify.com'.concat(
      b.image
    );
  }

  return banner;
}

describe('EC - Page Banner', () => {
  const template = '@ecl-twig/page-banner.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('default', () => {
    const data = formatBanner(bannerDataDefault);

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

  describe('image', () => {
    const data = formatBanner(bannerDataImage);

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

  describe('image-shade', () => {
    const data = formatBanner(bannerDataImageShade);

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

  describe('primary', () => {
    const data = formatBanner(bannerDataPrimary);

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

  describe('align-left', () => {
    const data = formatBanner(bannerDataAlignLeft);

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
