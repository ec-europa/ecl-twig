import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

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
  describe('Default', () => {
    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(demoData, {
        extra_classes:
          'custom-social-media-share custom-social-media-share--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(demoData, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
  describe('Default view', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(demoData)).resolves.toMatchSnapshot();
    });
  });
});
