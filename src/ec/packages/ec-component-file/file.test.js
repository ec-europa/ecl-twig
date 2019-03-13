import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';

describe('EC - File', () => {
  const template = path.resolve(__dirname, './file.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('With translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithTranslation)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataWithTranslation, {
        extra_classes: 'custom-link custom-link--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataWithTranslation, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Without translation', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWithoutTranslation)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataWithoutTranslation, {
        extra_classes: 'custom-link custom-link--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataWithoutTranslation, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
