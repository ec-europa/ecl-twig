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
            required: false,
          })
        )
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(specData, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraAttributes = merge(specData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(
        render(optionsWithExtraAttributes)
      ).resolves.toMatchSnapshot();
    });
  });

  describe('Required', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(specData)).resolves.toMatchSnapshot();
    });
  });

  describe('Disabled', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render(
          merge(specData, {
            disabled: true,
            required: false,
          })
        )
      ).resolves.toMatchSnapshot();
    });
  });

  describe('With error', () => {
    const options = merge(specData, {
      invalid: true,
      required: false,
    });

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });
});
