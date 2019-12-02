import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';

const defaultSprite = '/static/icons.svg';

demoTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleDescriptionContent.breadcrumb.icon_file_path = defaultSprite;

describe('EC - Page Header Standardised', () => {
  const template =
    '@ecl-twig/ec-component-page-header-standardised/ecl-page-header-standardised.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('title', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(render(demoTitleContent)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoTitleContent, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoTitleContent, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('meta-title', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(render(demoMetaTitleContent)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoMetaTitleContent, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoMetaTitleContent, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('meta-title-description', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);
      return expect(
        render(demoMetaTitleDescriptionContent)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoMetaTitleDescriptionContent, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoMetaTitleDescriptionContent, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
