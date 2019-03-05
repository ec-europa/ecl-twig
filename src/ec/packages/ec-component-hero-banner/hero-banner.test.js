import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import bannerDataDefault from '@ecl/ec-specs-hero-banner/demo/data--default';
import bannerDataImage from '@ecl/ec-specs-hero-banner/demo/data--image';
import bannerDataImageShade from '@ecl/ec-specs-hero-banner/demo/data--image-shade';
import bannerDataPrimary from '@ecl/ec-specs-hero-banner/demo/data--primary';
import bannerDataAlignLeft from '@ecl/ec-specs-hero-banner/demo/data--align-left';

function formatBanner(b) {
  const iconType = b.button.icon.shape.split('--');
  const banner = {
    type: b.variant,
    title: b.title,
    description: b.description,
    button: {
      type: b.button.variant,
      label: b.button.label,
      icon: {
        type: iconType[0],
        name: iconType[1],
        transform: b.button.icon.transform,
        size: b.button.icon.size,
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

describe('EC - Hero Banner', () => {
  const template = path.resolve(__dirname, './hero-banner.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('default', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = formatBanner(bannerDataDefault);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('image', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = formatBanner(bannerDataImage);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('image-shade', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = formatBanner(bannerDataImageShade);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('primary', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = formatBanner(bannerDataPrimary);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('align-left', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = formatBanner(bannerDataAlignLeft);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });
});
