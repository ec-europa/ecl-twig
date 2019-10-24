import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoContentImg from '@ecl/ec-specs-media-container/demo/data--image';
import demoContentVideo from './demo/data';

describe('EC Media Container', () => {
  const template =
    '@ecl-twig/ec-component-media-container/media-container.html.twig';
  const render = params => renderTwigFileAsNode(template, params);
  const defaultDataStructure = demoContentImg;

  describe('Media Container generic tests', () => {
    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(defaultDataStructure, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('Media container renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(defaultDataStructure, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });

  describe('EC - Media container image', () => {
    test('Media container image renders correctly', () => {
      expect.assertions(1);
      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('EC - Media container video', () => {
    test('Media container video renders correctly', () => {
      const options = merge(defaultDataStructure, {
        tracks: demoContentVideo.tracks,
        sources: demoContentVideo.sources,
      });

      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });
});
