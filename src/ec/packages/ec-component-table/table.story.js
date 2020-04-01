/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import dataDefault from '@ecl/ec-specs-table/demo/data--default';
import dataMulti from '@ecl/ec-specs-table/demo/data--multi';
import table from './ecl-table.html.twig';
import notes from './README.md';

// Preserve original data
const dataZebra = { ...dataDefault, zebra: true };

const prepareTable = (data, attr) => {
  let defaultAttr = '';
  if (attr) {
    defaultAttr = 'data-test data-test-another';
  }
  data.zebra = boolean('zebra', data.zebra, buttonLabels.cases);
  data.headers.forEach((headers, i) => {
    headers.forEach((header, ind) => {
      header.label = text(
        `headers[${i}][${ind}].label`,
        header.label,
        buttonLabels.required
      );
      header.colspan = text(
        `headers[${i}][${ind}].colspan`,
        header.colspan,
        buttonLabels.optional
      );
    });
  });

  data.rows.forEach((row, i) => {
    row.extra_classes = text(
      `rows[${i}].extra_classes`,
      row.extra_classes,
      buttonLabels.optional
    );
    row.extra_attributes = text(
      `rows[${i}].extra_attributes`,
      defaultAttr,
      buttonLabels.optional
    );
    row.forEach((cell, ind) => {
      cell.label = text(
        `rows[${i}][${ind}].label`,
        cell.label,
        buttonLabels.required
      );
      cell['data-ecl-table-header'] = text(
        `rows[${i}][${ind}]['data-ecl-table-header']`,
        cell['data-ecl-table-header'],
        buttonLabels.required
      );
      cell.group = boolean(
        `rows[${i}][${ind}].group`,
        cell.group,
        buttonLabels.optional
      );
      cell['data-ecl-table-header-group'] = text(
        `rows[${i}][${ind}]['data-ecl-table-header-group']`,
        cell['data-ecl-table-header-group'],
        buttonLabels.optional
      );
    });
  });

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Table', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add('default', () => table(prepareTable(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  })
  .add(
    'default with row extra attributes',
    () => table(prepareTable(dataDefault, true)),
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add('Zebra', () => table(prepareTable(dataZebra)), {
    notes: { markdown: notes, json: dataZebra },
  })
  .add('Multi', () => table(prepareTable(dataMulti)), {
    notes: { markdown: notes, json: dataMulti },
  });
