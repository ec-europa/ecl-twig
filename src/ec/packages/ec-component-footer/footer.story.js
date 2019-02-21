import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import { backToTop, identity, sections, common } from './demo/data';

import footer from './footer.html.twig';
import notes from './README.md';

storiesOf('Components/Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'corporate',
    () => footer({ back_to_top: backToTop, sections, common }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'custom',
    () => footer({ back_to_top: backToTop, identity, sections, common }),
    {
      notes: { markdown: notes },
    }
  );
