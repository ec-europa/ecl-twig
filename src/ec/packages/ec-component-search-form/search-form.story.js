import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import searchFormDocs from './docs/search-form.md';
import data from './demo/data';
import searchForm from './ecl-search-form.html.twig';

storiesOf('Components/Forms/Search Form', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      searchForm(
        merge(data, {
          button: {
            icon: {
              path: defaultSprite,
            },
            label: text('Button label', 'Search'),
          },
        })
      ),
    {
      notes: { markdown: searchFormDocs, json: data },
    }
  );
