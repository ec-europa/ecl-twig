import specs from '@ecl/eu-specs-footer-standardised/demo/data';
import adapter from '../adapter';

const data = adapter(specs);
data.sections.splice(3, 0, { section_id: 6 });

export default data;
