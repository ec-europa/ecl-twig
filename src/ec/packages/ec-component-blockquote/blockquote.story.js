import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-blockquote/demo/data';

import blockquote from './ecl-blockquote.html.twig';
import notes from './README.md';

storiesOf('Components/Blockquote', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () =>
      blockquote({
        citation: text('Citation', data.citation),
        author: text('Author name', data.author),
      }),
    {
      notes: { markdown: notes },
    }
  );
