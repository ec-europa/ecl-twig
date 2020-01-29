import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import demoData from './demo/data';
import menuLegacy from './ecl-menu-legacy.html.twig';
import notes from './README.md';

storiesOf('Components/Navigation/Menu Legacy', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const fullDemoData = { ...demoData, icon_path: iconPath };

      return menuLegacy(fullDemoData);
    },
    {
      notes: { markdown: notes },
    }
  );
