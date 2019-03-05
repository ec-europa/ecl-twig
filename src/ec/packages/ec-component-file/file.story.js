import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import { dataWithTranslation, dataWithoutTranslation } from './demo/data';

import fileDocs from './docs/file.md';
import file from './file.html.twig';

storiesOf('Components/File', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('without translation', () => file(dataWithoutTranslation), {
    notes: { markdown: fileDocs },
  })
  .add('with translation', () => file(dataWithTranslation), {
    notes: { markdown: fileDocs },
  });
