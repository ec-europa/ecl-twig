import path from 'path';
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoContent from '@ecl/ec-specs-media-container/demo/data--video';

describe('EC Media Container', () => {
  const template = path.resolve(__dirname, './media-container.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultDataStructure = {
    mediaContainer: {
      description: demoContent.description,
      image: demoContent.image,
      alt: demoContent.alt,
    },
  };

  describe('Generic tests', () => {
    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(defaultDataStructure, {
        extra_classes: 'custom-media-container custom-media-container--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
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
    test('- Media container image renders correctly', () => {
      expect.assertions(1);
      return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
    });
  });

  describe('EC - Media container video', () => {
    test('Media container video renders correctly', () => {
      const options = merge(
        defaultDataStructure,
        demoContent.sources,
        demoContent.tracks
      );
      expect.assertions(1);
      return expect(render(options)).resolves.toMatchSnapshot();
    });
  });
});
