import specs from '@ecl/ec-specs-datepicker/demo/data';
import adapter from '../adapter';

specs.autoinit = true;
specs.default_value = '01-10-2020';

export default adapter(specs);
