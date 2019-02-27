import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

import demoData from './demo/data';

// Set fake paths for svgs to render for tests.
demoData.links.forEach(link => {
  if (link.icons) {
    link.icons.forEach(icon => {
      icon.path = 'example'; // eslint-disable-line no-param-reassign
    });
  }
});

describe('EC - Social Media Share', () => {
  const template = path.resolve(__dirname, './social-media-share.html.twig');

  describe('Default view', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, demoData, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
