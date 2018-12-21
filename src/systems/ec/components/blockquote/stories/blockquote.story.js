import { storiesOf } from '@storybook/html';

import blockquote from '../blockquote.html.twig';

storiesOf('Blockquote', module).add('default', () =>
  blockquote({
    blockquote_body: 'Example body',
    blockquote_author: 'Author name',
  })
);
