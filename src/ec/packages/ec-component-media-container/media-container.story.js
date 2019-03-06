import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import demoVideo from '@ecl/ec-specs-media-container/demo/data--video';
import demoImg from '../../../../static/images/example-image.jpg';
import imageDocs from './docs/media-container-image.md';
import videoDocs from './docs/media-container-video.md';
import mediaContainer from './media-container.html.twig';

storiesOf('Components/Media container', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'image',
    () =>
      mediaContainer({
        description: text('Description', 'A description for this image'),
        alt: text('Alternate text', 'An alternate text for a missing image'),
        image: text('Image path', demoImg),
      }),
    {
      notes: { markdown: imageDocs },
    }
  )
  .add(
    'video',
    () =>
      mediaContainer({
        description: text('Description', demoVideo.description),
        alt: text('Alternative text', demoVideo.alt),
        image: text('Image path', demoImg),
        sources: demoVideo.sources,
        tracks: demoVideo.tracks,
      }),
    {
      notes: { markdown: videoDocs },
    }
  );
