import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, select } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-description-list/demo/data';
import dataHorizontal from '@ecl/ec-specs-description-list/demo/data--horizontal';
import docs from './README.md';
import descriptionList from './description-list.html.twig';

const options = {
  vertical: '',
  horizontal: 'horizontal',
};

storiesOf('Components/List/Description list', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'vertical',
    () => {
      const defaultValue = options.vertical;
      return descriptionList({
        ...data,
        variant: select('Variant', options, defaultValue),
      });
    },
    {
      notes: { markdown: docs },
    }
  )
  .add(
    'horizontal',
    () => {
      const defaultValue = options.horizontal;
      return descriptionList({
        ...dataHorizontal,
        variant: select('Variant', options, defaultValue),
      });
    },
    {
      notes: { markdown: docs },
    }
  );
