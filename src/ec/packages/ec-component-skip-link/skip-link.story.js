import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import skipLink from './ecl-skip-link.html.twig';
import notes from './README.md';

storiesOf('Components/Navigation/Skip Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      skipLink({
        label: text('Label', 'Skip to main content'),
        href: text('Href', '#top'),
      }),
    {
      notes: { markdown: notes },
    }
  );
