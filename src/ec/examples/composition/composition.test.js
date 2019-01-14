import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Composition', () => {
  test('renders correctly', done => {
    expect.assertions(1);

    const template = path.resolve(__dirname, './composition.html.twig');
    const data = {
      button_label: 'Example button',
      blockquote_citation: 'Example body',
      blockquote_author: 'Author name',
    };

    renderTwigFile(template, data, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});
