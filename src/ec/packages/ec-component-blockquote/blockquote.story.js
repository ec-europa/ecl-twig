import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-blockquote/demo/data';

import blockquote from './blockquote.html.twig';

storiesOf('Components/Blockquote', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .add('default', () =>
    blockquote({
      citation: text('Citation', data.citation),
      author: text('Author name', data.author),
    })
  );
