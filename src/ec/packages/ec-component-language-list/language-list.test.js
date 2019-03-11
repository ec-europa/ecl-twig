import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import { dataSplash, dataOverlay } from './demo/data';

describe('EC - Language List', () => {
  const template = path.resolve(__dirname, './language-list.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Splash', () => {
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
        extra_classes: 'custom-language-list custom-language-list--test',
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
        extra_classes: 'custom-language-list custom-language-list--test',
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
