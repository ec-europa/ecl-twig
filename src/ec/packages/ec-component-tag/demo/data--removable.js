import specs from '@ecl/ec-specs-tag/demo/data--removable';
import adapter from '../adapter';

specs.type = 'removable';

export default adapter(specs);
