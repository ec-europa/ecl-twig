import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Site Header', () => {
  const template = path.resolve(__dirname, './site-header.html.twig');
  const defaultIconPath = 'static/icons.svg';

  describe('Site Header default', () => {
    test(`- renders correctly`, done => {
      expect.assertions(1);

      const data = {
        icon_file_path: defaultIconPath,
        header_link: {
          url: '/example-1',
        },
      };

      renderTwigFile(template, data, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Site Header translated', () => {
    test(`- renders correctly`, done => {
      expect.assertions(1);

      const data = {
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
          },
        },
      };

      renderTwigFile(template, data, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
