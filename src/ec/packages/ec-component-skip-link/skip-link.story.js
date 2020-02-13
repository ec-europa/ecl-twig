import { storiesOf } from '@storybook/html';
import { withKnobs, text, button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import specs from '@ecl/ec-specs-skip-link/demo/data';
import skipLink from './ecl-skip-link.html.twig';
import notes from './README.md';

// Buttons for the demo.
const btnTabLabel = 'Focus on/off';
const btnTabHandler = () => {
  const skipLinkEl = document.querySelector('.ecl-skip-link');
  if (skipLinkEl !== document.activeElement) {
    skipLinkEl.focus();
  } else {
    document.activeElement.blur();
  }
  // Prevent the story from being reloaded.
  return false;
};

storiesOf('Components/Navigation/Skip Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      button(btnTabLabel, btnTabHandler);

      return skipLink({
        label: text('Label', 'Skip to main content'),
        href: text('Href', '#top'),
      });
    },
    {
      notes: { markdown: notes, json: specs },
    }
  );
