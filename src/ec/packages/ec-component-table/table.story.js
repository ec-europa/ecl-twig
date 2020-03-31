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
const defaultData = { ...dataDefault };
const dataZebra = { ...dataDefault, zebra: true };

defaultData.rows.forEach(rows => {
  rows.forEach(row => {
    row.extra_attributes = [
      { name: 'data-test' },
      { name: 'data-test-another' },
    ];
  });
});

const prepareTable = data => {
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

  data.rows.forEach((rows, i) => {
    rows.forEach((row, ind) => {
      row.label = text(
        `rows[${i}][${ind}].label`,
        row.label,
        buttonLabels.required
      );
      row['data-ecl-table-header'] = text(
        `rows[${i}][${ind}]['data-ecl-table-header']`,
        row['data-ecl-table-header'],
        buttonLabels.required
      );
      row.extra_classes = text(
        `rows[${i}][${ind}].extra_classes`,
        row.extra_classes,
        buttonLabels.optional
      );
      if (!row.extra_attributes) {
        row.extra_attributes = [];
        row.extra_attributes[0] = {};
        row.extra_attributes[1] = {};
      }
      row.extra_attributes[0].name = text(
        `rows[${i}][${ind}].extra_attributes[0].name`,
        row.extra_attributes[0].name,
        buttonLabels.optional
      );
      row.extra_attributes[0].value = text(
        `rows[${i}][${ind}].extra_attributes[0].value`,
        row.extra_attributes[0].value,
        buttonLabels.optional
      );
      if (row.extra_attributes[1].name) {
        row.extra_attributes[1].name = text(
          `rows[${i}][${ind}].extra_attributes[1].name`,
          row.extra_attributes[1].name,
          buttonLabels.optional
        );
        row.extra_attributes[1].value = text(
          `rows[${i}][${ind}].extra_attributes[1].value`,
          row.extra_attributes[1].value,
          buttonLabels.optional
        );
      }
      row.group = boolean(
        `rows[${i}][${ind}].group`,
        row.group,
        buttonLabels.optional
      );
      if (data.rows[i][ind].group) {
        row['data-ecl-table-header-group'] = text(
          `rows[${i}][${ind}]['data-ecl-table-header-group']`,
          row['data-ecl-table-header-group'],
          buttonLabels.optional
        );
      }
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
    () => table(prepareTable(defaultData)),
    {
      notes: { markdown: notes, json: defaultData },
    }
  )
  .add('Zebra', () => table(prepareTable(dataZebra)), {
    notes: { markdown: notes, json: dataZebra },
  })
  .add('Multi', () => table(prepareTable(dataMulti)), {
    notes: { markdown: notes, json: dataMulti },
  });
