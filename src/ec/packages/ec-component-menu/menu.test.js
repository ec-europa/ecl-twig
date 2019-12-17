import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import enData from './demo/data--en';
import frData from './demo/data--fr';
import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';

describe('EC - Menu', () => {
  const template = '@ecl-twig/ec-component-menu/ecl-menu.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(enData)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(enData, {
        extra_classes: 'custom-button custom-button--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(enData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Translated', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(frData)).resolves.toMatchSnapshot();
    });
  });

  describe('group1', () => {
    dataGroup1.group = 'group1';
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataGroup1)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataGroup1, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataGroup1, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Group2', () => {
    dataGroup1.group = 'group2';
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataGroup2)).resolves.toMatchSnapshot();
    });
  });
});
