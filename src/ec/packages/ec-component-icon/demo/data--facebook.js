import specs from '@ecl/ec-specs-icon/demo/data--facebook';
import adapter from '../adapter';

const data = adapter(specs);
data.icon.type = 'branded';

export default data;
