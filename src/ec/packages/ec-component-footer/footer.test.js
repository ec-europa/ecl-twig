import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

import { backToTop, identity, sections, common } from './demo/data';

describe('EC - Footer', () => {
  const template = path.resolve(__dirname, './footer.html.twig');

  describe('Corporate', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        { back_to_top: backToTop, sections, common },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });

  describe('Custom', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        { back_to_top: backToTop, identity, sections, common },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });
});
