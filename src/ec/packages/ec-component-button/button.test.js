import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Button', () => {
  test('renders correctly', done => {
    expect.assertions(1);

    const template = path.resolve(__dirname, './button.html.twig');
    const data = {
      label: 'Example button',
    };

    renderTwigFile(template, data, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});
