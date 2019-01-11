import path from 'path';
import Twig from 'twig';
import { format } from 'prettier';

test('Composition renders correctly', done => {
  expect.assertions(1);

  Twig.renderFile(
    path.resolve(__dirname, './composition.html.twig'),
    {
      button_label: 'Example button',
      blockquote_body: 'Example body',
      blockquote_author: 'Author name',
    },
    (err, html) => {
      expect(format(html, { parser: 'html' })).toMatchSnapshot();
      done();
    }
  );
});
