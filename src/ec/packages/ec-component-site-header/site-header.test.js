import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Site Header', () => {
  const template = path.resolve(__dirname, './site-header.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Default', () => {
    const options = {
      icon_file_path: defaultIconPath,
      language: {
        url: '/example',
        code: 'en',
        label: 'English',
      },
      header_link: {
        url: '/example-1',
        aria_label: 'European Commission',
      },
      header_image: {
        src: 'static/media/logo--en.30b933cc.svg',
        alt: 'European Commission logo',
        title: 'European Commission',
      },
      search_form: {
        button: {
          label: 'Search',
          icon: {
            type: 'general',
            name: 'search',
            path: defaultIconPath,
            size: 'xs',
          },
        },
      },
    };

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

  describe('Translated', () => {
    const options = {
      icon_file_path: defaultIconPath,
      language: {
        url: '/example',
        code: 'fr',
        label: 'Français',
      },
      header_link: {
        url: '/example-1',
        aria_label: 'Commmission Européenne',
      },
      header_image: {
        src: 'static/media/logo--fr.a8aaa7ab.svg',
        alt: 'Commmission Européenne logo',
        title: 'Commmission Européenne',
      },
      search_form: {
        button: {
          label: 'Recherche',
          icon: {
            type: 'general',
            name: 'search',
            path: defaultIconPath,
            size: 'xs',
          },
        },
      },
    };

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
});
