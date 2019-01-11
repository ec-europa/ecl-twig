import path from 'path';
import Twig from 'twig';
import { format } from 'prettier';

test('Blockquote renders correctly', done => {
  expect.assertions(1);

  Twig.renderFile(
    path.resolve(__dirname, './blockquote.html.twig'),
    {
      body: 'Example body',
      author: 'Author name',
    },
    (err, html) => {
      expect(format(html, { parser: 'html' })).toMatchSnapshot();
      done();
    }
  );
});
