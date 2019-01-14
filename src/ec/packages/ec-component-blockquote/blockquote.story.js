import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import data from '@ecl/ec-specs-blockquote/demo/data';

import blockquote from './blockquote.html.twig';

storiesOf('Components/Blockquote', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    blockquote({
      citation: text('Citation', data.citation),
      author: text('Author name', data.author),
    })
  );
