import specs from '@ecl/ec-specs-search-form/demo/data';

const data = {
  text_input: {
    id: specs.textInputId,
    extra_classes: 'ecl-search-form__text-input',
    label: specs.inputLabel,
    type: 'search',
  },
  button: {
    variant: 'search',
    icon: {
      type: 'general',
      name: 'search',
      path: '/icons.svg',
      size: 'xs',
    },
    label: specs.buttonLabel,
    extra_classes: 'ecl-search-form__button',
    extra_attributes: [{ name: 'aria-label', value: 'Search' }],
  },
};

export default data;
