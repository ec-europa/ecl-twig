import path from 'path';
import Twig from 'twig';
import { format } from 'prettier';

test('Button renders correctly', done => {
  expect.assertions(1);

  Twig.renderFile(
    path.resolve(__dirname, './button.html.twig'),
    {
      label: 'Example button',
    },
    (err, html) => {
      expect(format(html, { parser: 'html' })).toMatchSnapshot();
      done();
    }
  );
});
