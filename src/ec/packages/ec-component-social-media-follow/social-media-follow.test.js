import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

demoData.links.forEach(link => {
  if (link.icon) {
    link.icon.forEach(icon => {
      icon.path = 'example'; // eslint-disable-line no-param-reassign
    });
  }
});

describe('EC - Social Media Follow', () => {
  const template = path.resolve(__dirname, './social-media-follow.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Horizontal', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoData)).resolves.toMatchSnapshot();
    });
  });

  describe('Vertical', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          ...demoData,
          variant: 'vertical',
        })
      ).resolves.toMatchSnapshot();
    });
  });
});
