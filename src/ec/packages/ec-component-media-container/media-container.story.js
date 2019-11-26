import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import imgProps from '@ecl/ec-specs-media-container/demo/data--image';
import demoVideo from './demo/data';
import demoImg from '../../../../static/images/example-image.jpg';

import mediaContainer from './ecl-media-container.html.twig';
import notes from './README.md';

storiesOf('Components/Media container', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'image',
    () =>
      mediaContainer({
        description: text('Description', imgProps.description),
        alt: text('Alternate text', imgProps.alt),
        image: text('Image path', demoImg),
      }),
    {
      notes: { markdown: notes },
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
      notes: { markdown: notes },
    }
  );
