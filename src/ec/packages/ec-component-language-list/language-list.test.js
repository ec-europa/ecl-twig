import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import { dataSplash, dataOverlay } from './demo/data';

describe('EC - Language List', () => {
  const template = path.resolve(__dirname, './language-list.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Splash', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          items: dataSplash.items,
          overlay: false,
          logo: {
            alt: dataSplash.logoAlt,
            path: '/static/logo--mute.svg',
          },
          icon_path: '/static/icons.svg',
        })
      ).resolves.toMatchSnapshot();
    });
  });

  describe('Overlay', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          items: dataOverlay.items,
          overlay: true,
          close_label: dataOverlay.closeLabel,
          title: dataOverlay.title,
          icon_path: '/static/icons.svg',
        })
      ).resolves.toMatchSnapshot();
    });
  });
});
