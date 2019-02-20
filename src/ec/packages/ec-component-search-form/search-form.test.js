import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Search Form', () => {
  const template = path.resolve(__dirname, './search-form.html.twig');
  const defaultIconPath = 'static/icons.svg';

  describe('Default', () => {
    test(`- search form renders correctly`, done => {
      expect.assertions(1);

      const defaultDataStructure = {
        textInput: {
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
          },
          label: 'Search',
          extra_classes: 'ecl-search-form__button',
        },
      };

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
