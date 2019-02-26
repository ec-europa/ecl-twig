import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Site Header', () => {
  const template = path.resolve(__dirname, './breadcrumb.html.twig');
  const defaultIconPath = 'static/icons.svg';

  describe('Breadcrumb simple', () => {
    test(`- renders correctly`, done => {
      expect.assertions(1);

      const data = {
        links: [
          {
            label: 'Home',
            path: '/example',
          },
          {
            label: 'About the European Commission',
            path: '/example',
          },
          {
            label: 'News',
            path: '/example',
          },
        ],
        icon_file_path: defaultIconPath,
        navigation_text: 'You are here:',
      };

      renderTwigFile(template, data, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Breadcrumb long', () => {
    test(`- renders correctly`, done => {
      expect.assertions(1);

      const data = {
        links: [
          {
            label: 'Home',
            path: '/example',
          },
          {
            label: 'About the European Commission',
            path: '/example',
          },
          {
            label: 'Organisational structure',
            path: '/example',
          },
          {
            label: 'How the Commission is organised',
            path: '/example',
          },
          {
            label: 'News',
            path: '/example',
          },
        ],
        icon_file_path: defaultIconPath,
        navigation_text: 'You are here:',
      };

      renderTwigFile(template, data, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
