import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import searchFormDocs from './docs/search-form.md';
import searchForm from './search-form.html.twig';

storiesOf('Components/SearchForm', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      searchForm({
        textInput: {
          id: 'input-search',
          name: 'search',
          extra_classes: 'ecl-search-form__text-input',
        },
        button: {
          variant: 'search',
          icon: {
            type: 'general',
            name: 'search',
            path: defaultSprite,
          },
          label: text('Button label', 'Search'),
          extra_classes: 'ecl-search-form__button',
        },
      }),
    {
      notes: { markdown: searchFormDocs },
    }
  );
