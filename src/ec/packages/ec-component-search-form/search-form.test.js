import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Search Form', () => {
  const template = path.resolve(__dirname, './search-form.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Default', () => {
    const options = {
      text_input: {
        id: 'input-email',
        name: 'email',
        extra_classes: 'ecl-search-form__text-input',
      },
      button: {
        variant: 'search',
        icon: {
          type: 'general',
          name: 'search',
          path: defaultIconPath,
          size: 'fluid',
        },
        label: 'Search',
        extra_classes: 'ecl-search-form__button',
      },
    };

    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(options, {
        extra_classes: 'custom-link custom-link--test',
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
