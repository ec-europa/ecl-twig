import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

// Set fake paths for svgs to render for tests.
demoData.links.forEach(link => {
  if (link.icon) {
    link.icon.forEach(icon => {
      icon.path = 'example'; // eslint-disable-line no-param-reassign
    });
  }
});

describe('EC - Social Media Share', () => {
  const template = path.resolve(__dirname, './social-media-share.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default view', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoData)).resolves.toMatchSnapshot();
    });
  });
});
