import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { getExtraKnobs, tabLabels } from '@ecl-twig/story-utils';
import he from 'he';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from '@ecl/ec-specs-list/demo/data--text';
import dataLink from '@ecl/ec-specs-list/demo/data--link';
import dataLinkDivider from '@ecl/ec-specs-list/demo/data--link-divider';
import dataLinkNoBullet from '@ecl/ec-specs-list/demo/data--link-no-bullet';

import unorderedList from './ecl-unordered-list.html.twig';
import notes from './README.md';

const prepareUnorderedList = data => {
  if (data.variant) {
    data.variant = select(
      'variant',
      [data.variant],
      data.variant,
      tabLabels.required
    );
  }
  data.items.forEach((item, i) => {
    item.label = he.decode(
      text(`items[${i}].label`, item.label, tabLabels.required)
    );

    if (item.nested) {
      item.nested.forEach((n, ind) => {
        n.label = he.decode(
          text(`items[${i}].nested[${ind}].label`, n.label, tabLabels.optional)
        );
      });
    }
  });

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/List/Unordered list', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add('default', () => unorderedList(prepareUnorderedList(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  })
  .add(
    'with divider',
    () => unorderedList(prepareUnorderedList(dataLinkDivider)),
    {
      notes: { markdown: notes, json: dataLinkDivider },
    }
  )
  .add('with links', () => unorderedList(prepareUnorderedList(dataLink)), {
    notes: { markdown: notes },
  })
  .add(
    'no bullet',
    () => unorderedList(prepareUnorderedList(dataLinkNoBullet)),
    {
      notes: { markdown: notes },
    }
  );
