/* eslint-disable import/no-extraneous-dependencies */
import specDataDefault from '@ecl/ec-specs-checkbox/demo/data--default';
import specDataInvalid from '@ecl/ec-specs-checkbox/demo/data--invalid';

function formatItem(i) {
  const item = {
    ...i,
    helper_id: i.helperId,
    helper_text: i.helperText,
  };

  return item;
}

export const dataDefault = {
  ...specDataDefault,
  label_id: specDataDefault.labelId,
  items: specDataDefault.items.map(formatItem),
  helper_id: specDataDefault.helperId,
  helper_text: specDataDefault.helperText,
  invalid_text: specDataDefault.invalidText,
};

export const dataInvalid = {
  ...specDataInvalid,
  label_id: specDataInvalid.labelId,
  items: specDataInvalid.items.map(formatItem),
  helper_id: specDataInvalid.helperId,
  helper_text: specDataInvalid.helperText,
  invalid_text: specDataInvalid.invalidText,
};
