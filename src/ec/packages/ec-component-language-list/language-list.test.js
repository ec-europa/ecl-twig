import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

// Import data for tests
import { dataSplash, dataOverlay } from './demo/data';

describe('EC - Language List', () => {
  const template = path.resolve(__dirname, './language-list.html.twig');

  describe('Splash', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          items: dataSplash.items,
          overlay: false,
          logo: {
            alt: dataSplash.logoAlt,
            path: '/static/logo--mute.svg',
          },
          icon_path: '/static/icons.svg',
        },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });

  describe('Overlay', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          items: dataOverlay.items,
          overlay: true,
          close_label: dataOverlay.closeLabel,
          title: dataOverlay.title,
          icon_path: '/static/icons.svg',
        },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });
});
