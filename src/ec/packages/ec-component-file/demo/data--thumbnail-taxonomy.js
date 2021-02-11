import specs from '@ecl/ec-specs-file/demo/data--thumbnail';
import adapter from '../adapter';

specs.label = {
  variant: 'highlight',
  label: 'highlighted',
};
specs.taxonomy = {
  variant: 'taxonomy',
  items: [
    {
      term: 'Science areas',
      definition: [
        {
          label: 'Energy and transport',
          variant: 'display',
        },
        {
          label: 'Standards',
          variant: 'display',
        },
      ],
    },
    {
      term: 'Keywords',
      definition: [
        {
          label: 'Electricity',
          variant: 'display',
        },
        {
          label: 'Electromobility',
          variant: 'display',
        },
        {
          label: 'Energy',
          variant: 'display',
        },
        {
          label: 'Energy storage',
          variant: 'display',
        },
        {
          label: 'Security',
          variant: 'display',
        },
        {
          label: 'Transport',
          variant: 'display',
        },
        {
          label: 'Low carbon',
          variant: 'display',
        },
      ],
    },
  ],
};

export default adapter(specs);
