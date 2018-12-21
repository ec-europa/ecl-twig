/* global document */
import { storiesOf } from '@storybook/html';

import blockquote from './blockquote.html.twig';

storiesOf('Demo', module).add('blockquote', () =>
  blockquote({
    blockquote_body: 'Example body',
    blockquote_author: 'Author name',
  })
);
