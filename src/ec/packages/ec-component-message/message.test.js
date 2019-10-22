import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import { dataError, dataInfo, dataSuccess, dataWarning } from './demo/data';

describe('EC - Message', () => {
  const template = '@ecl-twig/ec-component-message/message.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Info', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataInfo)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataInfo, {
        extra_classes: 'custom-button custom-button--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataInfo, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Success', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSuccess)).resolves.toMatchSnapshot();
    });
  });

  describe('Warning', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataWarning)).resolves.toMatchSnapshot();
    });
  });

  describe('Error', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataError)).resolves.toMatchSnapshot();
    });
  });
});
