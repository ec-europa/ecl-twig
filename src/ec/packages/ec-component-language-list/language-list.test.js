import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import { dataSplash, dataOverlay } from './demo/data';

describe('EC - Language List', () => {
  describe('Splash', () => {
    const template =
      'ec-component-language-list/language-list-splash.html.twig';
    const render = params => renderTwigFileAsNode(template, params);

    const options = {
      items: dataSplash.items,
      overlay: false,
      logo: {
        alt: dataSplash.logoAlt,
        path: '/static/logo--mute.svg',
      },
      icon_path: '/static/icons.svg',
    };

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Overlay', () => {
    const template =
      'ec-component-language-list/language-list-overlay.html.twig';
    const render = params => renderTwigFileAsNode(template, params);

    const options = {
      items: dataOverlay.items,
      overlay: true,
      close_label: dataOverlay.closeLabel,
      title: dataOverlay.title,
      icon_path: '/static/icons.svg',
    };

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
