import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataSplash from './demo/data--splash';
import dataOverlay from './demo/data--overlay';

describe('EC - Language List', () => {
  describe('Splash', () => {
    const template =
      '@ecl-twig/ec-component-language-list/ecl-language-list-main.html.twig';
    const render = params => renderTwigFileAsNode(template, params);

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataSplash)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataSplash, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataSplash, {
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
      '@ecl-twig/ec-component-language-list/ecl-language-list-main.html.twig';
    const render = params => renderTwigFileAsNode(template, params);

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataOverlay)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataOverlay, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataOverlay, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
