import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import message from './message.html.twig';
import notes from './README.md';

import { dataError, dataInfo, dataSuccess, dataWarning } from './demo/data';

dataError.icon.path = defaultSprite;
dataError.close.icon.path = defaultSprite;
dataInfo.icon.path = defaultSprite;
dataInfo.close.icon.path = defaultSprite;
dataSuccess.icon.path = defaultSprite;
dataSuccess.close.icon.path = defaultSprite;
dataWarning.icon.path = defaultSprite;
dataWarning.close.icon.path = defaultSprite;

const msgVariants = {
  info: 'info',
  success: 'success',
  error: 'error',
  warning: 'warning',
};

storiesOf('Components/Messages', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      const msgVariantsSelect = select('Message variant', msgVariants, 'info');

      return message({
        ...dataInfo,
        title: text('Title', 'Information message'),
        description: text(
          'Description',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.'
        ),
        variant: msgVariantsSelect,
      });
    },
    {
      notes: { markdown: notes },
    }
  );
