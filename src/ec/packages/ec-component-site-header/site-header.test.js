import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Site Header', () => {
  const template = path.resolve(__dirname, './site-header.html.twig');
  const defaultIconPath = 'static/icons.svg';

  describe('default', () => {
    test(`- renders correctly`, done => {
      expect.assertions(1);

      const data = {
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
            },
          },
        },
      };

      renderTwigFile(template, data, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('translated', () => {
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
            icon: {
              type: 'general',
              name: 'search',
              path: defaultIconPath,
            },
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
