import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import { backToTop, identity, sections, common } from './demo/data';

describe('EC - Footer', () => {
  const template = path.resolve(__dirname, './footer.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Corporate', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ back_to_top: backToTop, sections, common })
      ).resolves.toMatchSnapshot();
    });
  });

  describe('Custom', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({ back_to_top: backToTop, identity, sections, common })
      ).resolves.toMatchSnapshot();
    });
  });
});
