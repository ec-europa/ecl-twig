import specs from '@ecl/ec-specs-select/demo/data';

const fullSpecs = {
  ...specs,
  icon_path: '/icons.svg',
  invalid_text: 'This is the error message',
  helper_text: "This is the input's helper text.",
  optional_text: '(optional)',
  width: 'm',
  required: true,
  required_text: '*',
  id: 'select-id',
};

export default fullSpecs;
