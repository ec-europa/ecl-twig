import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';
import demoContent from '@ecl/ec-specs-media-container/demo/data--video';

describe('EC - Media container image', () => {
  const template = path.resolve(__dirname, './media-container.html.twig');
  test(`- Media container image renders correctly`, done => {
    expect.assertions(1);

    const defaultDataStructure = {
      description: demoContent.description,
      image: demoContent.image,
      alt: demoContent.alt,
    };

    renderTwigFile(template, defaultDataStructure, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});

describe('EC - Media container video', () => {
  const template = path.resolve(__dirname, './media-container.html.twig');
  test(`- Media container video renders correctly`, done => {
    expect.assertions(1);

    renderTwigFile(template, demoContent, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});
