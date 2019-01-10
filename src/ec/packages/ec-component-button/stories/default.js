import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';

import button from '../button.html.twig';

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    button({
      label: text('Label', 'Example button'),
    })
  );
