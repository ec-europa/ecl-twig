import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-social-icons/dist/sprites/icons-social.svg';
import demoData from './demo/data';

import SocialMediaFollow from './ecl-social-media-follow.html.twig';
import notes from './docs/social-media-follow.md';

demoData.links.forEach(link => {
  if (link.icon) {
    link.icon.forEach(icon => {
      icon.path = defaultSprite; // eslint-disable-line no-param-reassign
    });
  }
});

storiesOf('Components/Social Media Follow', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'horizontal',
    () =>
      SocialMediaFollow({
        description: text('Description', demoData.description),
        links: demoData.links,
      }),
    {
      notes: { markdown: notes, json: demoData },
    }
  )
  .add(
    'vertical',
    () =>
      SocialMediaFollow({
        description: text('Description', demoData.description),
        links: demoData.links,
        variant: 'vertical',
      }),
    {
      notes: { markdown: notes, json: demoData },
    }
  );
