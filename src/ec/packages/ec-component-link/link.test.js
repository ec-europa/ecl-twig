import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Link', () => {
  const template = '@ecl-twig/ec-component-link/ecl-link.html.twig';
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';
  const defaultDataStructure = {
    link: {
      type: '',
      label: '',
      path: '/path',
    },
  };

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const options = merge(defaultDataStructure, {
        link: {
          type: 'default',
          label: 'Default link',
        },
      });

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('Standalone', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const options = merge(defaultDataStructure, {
        link: {
          type: 'standalone',
          label: 'Standalone link',
        },
      });

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('Standalone with missing icon name', () => {
    const options = merge(defaultDataStructure, {
      link: {
        type: 'standalone',
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: {
        type: 'ui',
        size: 'fluid',
        path: defaultIconPath,
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('With two icons after', () => {
    const options = merge(defaultDataStructure, {
      link: {
        type: 'standalone',
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: [
        {
          type: 'ui',
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
        },
        {
          type: 'ui',
          name: 'download',
          size: 'fluid',
          path: defaultIconPath,
        },
      ],
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('With missing icon name', () => {
    const options = merge(defaultDataStructure, {
      link: {
        type: 'standalone',
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: [
        {
          type: 'ui',
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
        },
        {
          type: 'ui',
          size: 'xs',
          path: defaultIconPath,
        },
      ],
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('With two icons before', () => {
    const options = merge(defaultDataStructure, {
      link: {
        type: 'standalone',
        label: 'Standalone link with icon',
        icon_position: 'before',
      },
      icon: [
        {
          type: 'ui',
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
        },
        {
          type: 'ui',
          name: 'download',
          size: 'fluid',
          path: defaultIconPath,
        },
      ],
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon before', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const options = merge(defaultDataStructure, {
        link: {
          type: 'standalone',
          label: 'Standalone link with icon',
          icon_position: 'before',
        },
        icon: {
          type: 'ui',
          name: 'external',
          size: 'fluid',
          path: defaultIconPath,
          extra_classes: 'ecl-test-extra-class',
        },
      });

      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });

  describe('With icon after', () => {
    const options = merge(defaultDataStructure, {
      link: {
        type: 'standalone',
        label: 'Standalone link with icon',
        icon_position: 'after',
      },
      icon: {
        type: 'ui',
        name: 'external',
        size: 'fluid',
        path: defaultIconPath,
        extra_classes: 'ecl-test-extra-class',
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Cta variant with icon', () => {
    const options = merge(defaultDataStructure, {
      link: {
        type: 'cta',
        label: 'Call to action link',
        icon_position: 'after',
      },
      icon: {
        type: 'ui',
        name: 'corner-arrow',
        size: 'fluid',
        path: defaultIconPath,
        transform: 'rotate-90',
      },
    });

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });
});
