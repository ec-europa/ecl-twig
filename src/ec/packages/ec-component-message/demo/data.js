/* eslint-disable import/no-extraneous-dependencies */
import specDataError from '@ecl/ec-specs-message/demo/data--error';
import specDataInfo from '@ecl/ec-specs-message/demo/data--info';
import specDataSuccess from '@ecl/ec-specs-message/demo/data--success';
import specDataWarning from '@ecl/ec-specs-message/demo/data--warning';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

function formatIcon(i) {
  const [type, name] = i.shape.split('--');
  const icon = {
    path: defaultSprite,
    type,
    name,
    size: i.size,
  };

  return icon;
}

function formatButton(b) {
  const button = {
    label: b.label,
    icon: formatIcon(b.icon),
  };

  return button;
}

export const dataError = {
  variant: specDataError.variant,
  icon: formatIcon(specDataError.icon),
  title: specDataError.title,
  description: specDataError.description,
  close: formatButton(specDataError.close),
};

export const dataInfo = {
  variant: specDataInfo.variant,
  icon: formatIcon(specDataInfo.icon),
  title: specDataInfo.title,
  description: specDataInfo.description,
  close: formatButton(specDataInfo.close),
};

export const dataSuccess = {
  variant: specDataSuccess.variant,
  icon: formatIcon(specDataSuccess.icon),
  title: specDataSuccess.title,
  description: specDataSuccess.description,
  close: formatButton(specDataSuccess.close),
};

export const dataWarning = {
  variant: specDataWarning.variant,
  icon: formatIcon(specDataWarning.icon),
  title: specDataWarning.title,
  description: specDataWarning.description,
  close: formatButton(specDataWarning.close),
};
