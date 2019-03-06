import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import data from '@ecl/ec-specs-blockquote/demo/data';

describe('EC - Blockquote', () => {
  const template = path.resolve(__dirname, './blockquote.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });
});
