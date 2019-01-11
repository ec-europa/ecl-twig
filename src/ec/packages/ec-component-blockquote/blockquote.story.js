import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

import blockquote from './blockquote.html.twig';

storiesOf('Components/Blockquote', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    blockquote({
      body: text('Citation', 'Example body'),
      author: text('Author name', 'Author name'),
    })
  );
