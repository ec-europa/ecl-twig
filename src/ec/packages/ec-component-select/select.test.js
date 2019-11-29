import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import specData from './demo/data';

describe('EC - Select', () => {
  const template = '@ecl-twig/ec-component-select/ecl-select.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(
          merge(specData, {
            helper_text: 'Help message',
            id: 'example-id',
            name: 'example-name',
          })
        )
      ).resolves.toMatchSnapshot();
    });
  });

  describe('Disabled', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(
          merge(specData, {
            disabled: true,
            helper_text: 'Help message',
            id: 'example-id',
            name: 'example-name',
          })
        )
      ).resolves.toMatchSnapshot();
    });
  });

  describe('With error', () => {
    const options = merge(specData, {
      invalid: true,
      invalid_text: 'Error message',
      helper_text: 'Help message',
      id: 'example-id',
      name: 'example-name',
    });

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });
});
