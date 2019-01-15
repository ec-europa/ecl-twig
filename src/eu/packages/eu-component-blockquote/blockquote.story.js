import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import blockquote from './blockquote.html.twig';

storiesOf('Blockquote', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .add('default', () =>
    blockquote({
      blockquote_body: text('Citation', 'Example body'),
      blockquote_author: text('Author name', 'Author name'),
    })
  );
