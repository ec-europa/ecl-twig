import specs from '@ecl/ec-specs-search-form/demo/data';

const data = {
  text_input: {
    id: specs.textInputId,
    name: 'search',
    extra_classes: 'ecl-search-form__text-input',
    label: specs.inputLabel,
  },
  button: {
    variant: 'search',
    icon: {
      type: 'general',
      name: 'search',
      path: '/icons.svg',
      size: 'fluid',
    },
    label: specs.buttonLabel,
    extra_classes: 'ecl-search-form__button',
  },
};

export default data;
