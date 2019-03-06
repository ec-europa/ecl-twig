import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Search Form', () => {
  const template = path.resolve(__dirname, './search-form.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const defaultDataStructure = {
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

      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });
});
