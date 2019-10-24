import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import {
  dataDefault,
  dataInvalid,
  dataBinary,
  dataBinaryInvalid,
} from './demo/data';

describe('EC - Radio', () => {
  const template = '@ecl-twig/ec-component-radio/radio-group.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Invalid', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataInvalid)).resolves.toMatchSnapshot();
    });
  });

  describe('Binary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataBinary)).resolves.toMatchSnapshot();
    });
  });

  describe('Binary invalid', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataBinaryInvalid)).resolves.toMatchSnapshot();
    });
  });
});
