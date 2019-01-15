import { storiesOf } from '@storybook/html';
import withCode from '@ecl-twig/storybook-addon-code';

import template from './composition.html.twig';

storiesOf('Examples/Composition', module)
  .addDecorator(withCode)
  .add('default', () =>
    template({
      button_label: 'Example button',
      blockquote_citation: 'Example body',
      blockquote_author: 'Author name',
    })
  );
