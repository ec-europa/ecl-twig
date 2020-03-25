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

const prepareTable = data => {
  data.zebra = boolean('zebra', false, buttonLabels.cases);
  data.headers[0].forEach((header, index) => {
    header.label = text(
      `headers[0][${index}].label`,
      header.label,
      buttonLabels.required
    );
    header.colspan = text(
      `headers[0][${index}].colspan`,
      header.colspan,
      buttonLabels.optional
    );
  });
  data.rows[0].forEach((row, index) => {
    row.label = text(
      `rows[0][${index}].label`,
      row.label,
      buttonLabels.required
    );
    row.extra_classes = text(
      `rows[0][${index}].extra_classes`,
      row.extra_classes,
      buttonLabels.optional
    );
    row.group = boolean(`rows[0][${index}].group`, false, buttonLabels.cases);
  });

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Table', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      dataDefault.rows.forEach(row => {
        delete row.extra_attributes;
      });
      return table(prepareTable(dataDefault));
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'default with row extra attributes',
    () => {
      dataDefault.rows.forEach((row, index) => {
        row.extra_attributes = text(
          `rows[${index}].extra_attributes`,
          'data-test data-test-another',
          buttonLabels.optional
        ); // eslint-disable-line no-param-reassign
      });
      return table(prepareTable(dataDefault));
    },
    {
      notes: { markdown: notes, json: prepareTable(dataDefault) },
    }
  )
  .add(
    'Zebra',
    () => {
      dataDefault.rows.forEach(row => {
        delete row.extra_attributes;
      });
      return table(dataDefault);
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'Multi',
    () => {
      dataDefault.rows.forEach(row => {
        delete row.extra_attributes;
      });
      return table(dataMulti);
    },
    {
      notes: { markdown: notes, json: dataMulti },
    }
  );
