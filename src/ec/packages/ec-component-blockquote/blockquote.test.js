import path from 'path';
import data from '@ecl/ec-specs-blockquote/demo/data';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Blockquote', () => {
  test('renders correctly', done => {
    expect.assertions(1);

    const template = path.resolve(__dirname, './blockquote.html.twig');

    renderTwigFile(template, data, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});
