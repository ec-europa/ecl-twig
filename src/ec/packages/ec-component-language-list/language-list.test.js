import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

// Import data for tests
import { common, items, splash, overlay } from './demo/data';

describe('EC - Language List', () => {
  const template = path.resolve(__dirname, './language-list.html.twig');

  describe('Splash', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          items,
          overlay: splash.overlay,
          logo: {
            alt: splash.logoAlt,
            path: '/static/logo--mute.svg',
          },
          icon_path: common.iconPath,
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
          items,
          overlay: overlay.overlay,
          close_label: overlay.closeLabel,
          title: overlay.title,
          icon_path: common.iconPath,
        },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });
});
