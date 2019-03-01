import path from 'path';
import data from '@ecl/ec-specs-expandable/demo/data';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Expandable', () => {
  test('renders correctly', done => {
    expect.assertions(1);

    const template = path.resolve(__dirname, './expandable.html.twig');

    renderTwigFile(template, data, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});
