import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Tag', () => {
  const template = '@ecl-twig/ec-component-tag/ecl-tag.html.twig';
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';
  const defaultDataStructure = {
    tag: {
      path: '',
      type: '',
      label: '',
    },
    default_icon_path: defaultIconPath,
  };

  describe('Link', () => {
    const options = merge(defaultDataStructure, {
      tag: {
        type: 'link',
        label: 'Link tag',
        path: '/example-path',
      },
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

  describe('Button', () => {
    const options = merge(defaultDataStructure, {
      tag: {
        type: 'button',
        label: 'Button tag',
      },
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

  describe('Removable', () => {
    const options = merge(defaultDataStructure, {
      tag: {
        type: 'removable',
        label: 'Removable tag',
        default_icon_path: defaultIconPath,
      },
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
