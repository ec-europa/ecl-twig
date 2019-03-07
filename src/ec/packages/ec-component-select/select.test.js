import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import specData from '@ecl/ec-specs-select/demo/data';

describe('EC - Select', () => {
  const template = path.resolve(__dirname, './select.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          label: specData.label,
          options: specData.options,
          helper_text: 'Help message',
          icon_path: 'path-to-icons-file.svg',
          id: 'example-id',
          name: 'example-name',
        })
      ).resolves.toMatchSnapshot();
    });
  });

  describe('Disabled', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          disabled: true,
          label: specData.label,
          options: specData.options,
          helper_text: 'Help message',
          icon_path: 'path-to-icons-file.svg',
          id: 'example-id',
          name: 'example-name',
        })
      ).resolves.toMatchSnapshot();
    });
  });

  describe('With error', () => {
    const options = {
      invalid: true,
      invalid_text: 'Error message',
      label: specData.label,
      options: specData.options,
      helper_text: 'Help message',
      icon_path: 'path-to-icons-file.svg',
      id: 'example-id',
      name: 'example-name',
    };

    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_classes: 'custom-select custom-select--test',
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
