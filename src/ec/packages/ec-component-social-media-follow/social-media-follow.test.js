import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

import data from './demo/data';

describe('EC - Social Media Follow', () => {
  const template = path.resolve(__dirname, './social-media-follow.html.twig');

  describe('Horizontal', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, data, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Vertical', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          ...data,
          variant: 'vertical',
        },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });
});
