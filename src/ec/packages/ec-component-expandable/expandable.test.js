import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

import demoData from './demo/data';

// Add SVG icon path.
demoData.button.icon.path = 'example';

describe('EC - Expandable', () => {
  test('renders correctly', done => {
    expect.assertions(1);

    const template = path.resolve(__dirname, './expandable.html.twig');

    renderTwigFile(template, demoData, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});
