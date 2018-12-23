import { storiesOf } from '@storybook/html';

import button from '../button.html.twig';

storiesOf('Button', module).add('default', () =>
  button({
    label: 'Example button',
    blockquote_body: 'Example body',
    blockquote_author: 'Author name',
  })
);
