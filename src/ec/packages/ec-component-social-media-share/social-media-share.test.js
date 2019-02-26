import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Social Media Share', () => {
  const template = path.resolve(__dirname, './social-media-share.html.twig');

  describe('Default view', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, {}, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
