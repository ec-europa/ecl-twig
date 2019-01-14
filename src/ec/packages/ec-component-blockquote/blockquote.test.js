import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Blockquote', () => {
  test('renders correctly', done => {
    expect.assertions(1);

    const template = path.resolve(__dirname, './blockquote.html.twig');
    const data = {
      body: 'Example body',
      author: 'Author name',
    };

    renderTwigFile(template, data, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});
