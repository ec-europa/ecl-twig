/* eslint-disable import/no-extraneous-dependencies */
import specDataDefault from '@ecl/ec-specs-radio/demo/data--default';
import specDataInvalid from '@ecl/ec-specs-radio/demo/data--invalid';
import specDataBinary from '@ecl/ec-specs-radio/demo/data--binary';
import specDataBinaryInvalid from '@ecl/ec-specs-radio/demo/data--binary-invalid';

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

export const dataBinary = {
  ...specDataBinary,
  label_id: specDataBinary.labelId,
  items: specDataBinary.items.map(formatItem),
  helper_id: specDataBinary.helperId,
  helper_text: specDataBinary.helperText,
  invalid_text: specDataBinary.invalidText,
};

export const dataBinaryInvalid = {
  ...specDataBinaryInvalid,
  label_id: specDataBinaryInvalid.labelId,
  items: specDataBinaryInvalid.items.map(formatItem),
  helper_id: specDataBinaryInvalid.helperId,
  helper_text: specDataBinaryInvalid.helperText,
  invalid_text: specDataBinaryInvalid.invalidText,
};
