import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import specs from '@ecl/ec-specs-description-list/demo/data';
import specsHorizontal from './demo/data--horizontal';
import specsTaxonomy from './demo/data--taxonomy';
import descriptionList from './ecl-description-list.html.twig';
import notes from './README.md';

const prepareList = (data) => {
  if (data.variant) {
    data.variant = select(
      'variant',
      [data.variant],
      data.variant,
      tabLabels.required
    );
  }
  for (const [i, item] of data.items.entries()) {
    if (Array.isArray(item.term)) {
      for (const [j, termItem] of item.term.entries()) {
        data.items[i].term[j] = text(
          `items[${i}].term[${j}]`,
          termItem,
          tabLabels.required
        );
      }
    } else {
      item.term = text(`items[${i}].term`, item.term, tabLabels.required);
    }
    if (Array.isArray(item.definition)) {
      for (let [k, def] of item.definition.entries()) {
        if (!def.label) {
          def = text(`items[${i}].definition[${k}]`, def, tabLabels.required);
        } else {
          def.label = text(
            `items[${i}].definition[${k}].label`,
            def.label,
            tabLabels.required
          );
          def.variant = text(
            `items[${i}].definition[${k}].variant`,
            def.variant,
            tabLabels.required
          );
        }
      }
    } else {
      item.definition = text(
        `items[${i}].definition`,
        item.definition,
        tabLabels.required
      );
    }
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/List/Description list',
  decorators: [withNotes, withCode, withKnobs],
};

export const Vertical = () => descriptionList(prepareList(specs));

Vertical.storyName = 'vertical';
Vertical.parameters = { notes: { markdown: notes, json: specs } };

export const Horizontal = () => descriptionList(prepareList(specsHorizontal));

Horizontal.storyName = 'horizontal';
Horizontal.parameters = { notes: { markdown: notes, json: specsHorizontal } };

export const Taxonomy = () => descriptionList(prepareList(specsTaxonomy));

Taxonomy.storyName = 'horizontal (taxonomy)';
Taxonomy.parameters = { notes: { markdown: notes, json: specsTaxonomy } };
