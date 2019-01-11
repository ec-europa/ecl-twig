import { storiesOf } from '@storybook/html';

import template from './composition.html.twig';

storiesOf('Examples/Composition', module).add('default', () =>
  template({
    button_label: 'Example button',
    blockquote_body: 'Example body',
    blockquote_author: 'Author name',
  })
);
