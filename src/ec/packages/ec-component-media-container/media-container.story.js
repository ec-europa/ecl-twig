import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
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
        description: text('description', imgProps.description),
        alt: text('alt', imgProps.alt),
        image: text('image', demoImg),
      }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'video',
    () =>
      mediaContainer({
        description: text('description', demoVideo.description),
        alt: text('alt', demoVideo.alt),
        image: text('image', demoImg),
        sources: demoVideo.sources,
        tracks: demoVideo.tracks,
      }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'embedded video',
    () => {
      const options = ['16-9', '4-3', '3-2', '1-1'];
      const ratio = select('ratio', options, '16-9');

      return mediaContainer({
        description: text('description', demoVideo.description),
        embedded_media:
          '<iframe title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>',
        ratio,
      });
    },
    {
      notes: { markdown: notes },
    }
  );
