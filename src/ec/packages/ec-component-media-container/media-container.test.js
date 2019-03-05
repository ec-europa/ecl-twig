import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Media container image', () => {
  const template = path.resolve(__dirname, './media-container.html.twig');
  test(`- Media container image renders correctly`, done => {
    expect.assertions(1);

    const defaultDataStructure = {
      description: 'A description',
      image: 'static/example-image.jpg',
      alt: 'An alt text',
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

    const defaultDataStructure = {
      sources: [
        {
          src: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          type: 'video/mp4',
        },
        {
          src: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.webm',
          type: 'video/webm',
        },
      ],
      tracks: [
        {
          src: '/captions/bunny-en.vtt',
          kind: 'captions',
          srcLang: 'en',
          label: 'English',
        },
        {
          src: '/captions/bunny-fr.vtt',
          kind: 'captions',
          srcLang: 'fr',
          label: 'français',
        },
      ],
      description: 'A description',
      image: 'static/example-image.jpg',
      alt: 'An alt text',
    };

    renderTwigFile(template, defaultDataStructure, (err, html) => {
      expect(html).toMatchSnapshot();
      done();
    });
  });
});
