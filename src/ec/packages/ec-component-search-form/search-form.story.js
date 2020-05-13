import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import searchForm from './ecl-search-form.html.twig';
import dataDefault from './demo/data';
import notes from './README.md';

const prepareSearchForm = data => {
  data.button.label = text(
    'button.label',
    data.button.label,
    tabLabels.required
  );
  data.button.icon.path = select(
    'button.icon.path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Forms/Search Form', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('default', () => searchForm(prepareSearchForm(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  });
