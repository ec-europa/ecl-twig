import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import searchForm from './ecl-search-form.html.twig';
import notes from './README.md';

storiesOf('Components/Forms/Search Form', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      searchForm({
        text_input: {
          id: 'input-search',
          name: 'search',
          extra_classes: 'ecl-search-form__text-input',
          label: text('Field label', 'Search'),
        },
        button: {
          variant: 'search',
          icon: {
            type: 'general',
            name: 'search',
            path: defaultSprite,
            size: 'fluid',
          },
          label: text('Button label', 'Search'),
          extra_classes: 'ecl-search-form__button',
        },
      }),
    {
      notes: { markdown: notes },
    }
  );
