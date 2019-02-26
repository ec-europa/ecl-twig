import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from './demo/data';

import SocialMediaFollow from './social-media-follow.html.twig';
import notes from './README.md';

storiesOf('Components/Social Media Follow', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'horizontal',
    () =>
      SocialMediaFollow({
        description: text('Description', data.description),
        links: data.links,
      }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'vertical',
    () =>
      SocialMediaFollow({
        description: text('Description', data.description),
        links: data.links,
        variant: 'vertical',
      }),
    {
      notes: { markdown: notes },
    }
  );
