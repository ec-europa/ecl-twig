import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Text area', () => {
  const template = path.resolve(__dirname, './text-area.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    const options = {
      label: 'Label',
      placeholder: 'Placeholder',
      helper_text: 'Help message',
      id: 'example-id',
      name: 'example-name',
    };

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with a default value', () => {
      expect.assertions(1);

      const optionsWithDefaultValue = merge(options, {
        default_value: 'Hello world!',
      });

      return expect(render(optionsWithDefaultValue)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra group class names', () => {
      expect.assertions(1);

      const optionsWithExtraGroupClasses = merge(options, {
        extra_group_classes: 'custom-group-class custom-group-class--test',
      });

      return expect(
        render(optionsWithExtraGroupClasses)
      ).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra label class names', () => {
      expect.assertions(1);

      const optionsWithExtraLabelClasses = merge(options, {
        label_class_name: 'custom-label-class custom-label-class--test',
      });

      return expect(
        render(optionsWithExtraLabelClasses)
      ).resolves.toMatchSnapshot();
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

  describe('Disabled', () => {
    const options = {
      label: 'Label',
      placeholder: 'Placeholder',
      helper_text: 'Help message',
      disabled: true,
      id: 'example-id',
    };

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra group class names', () => {
      expect.assertions(1);

      const optionsWithExtraGroupClasses = merge(options, {
        extra_group_classes: 'custom-group-class custom-group-class--test',
      });

      return expect(
        render(optionsWithExtraGroupClasses)
      ).resolves.toMatchSnapshot();
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

  describe('With error', () => {
    const options = {
      label: 'Label',
      placeholder: 'Placeholder',
      invalid: true,
      invalid_text: 'Error message',
      helper_text: 'Help message',
      id: 'example-id',
      name: 'example-name',
    };

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra group class names', () => {
      expect.assertions(1);

      const optionsWithExtraGroupClasses = merge(options, {
        extra_group_classes: 'custom-group-class custom-group-class--test',
      });

      return expect(
        render(optionsWithExtraGroupClasses)
      ).resolves.toMatchSnapshot();
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
