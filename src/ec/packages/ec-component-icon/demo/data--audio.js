import specs from '@ecl/ec-specs-icon/demo/data--audio';
import adapter from '../adapter';

const data = adapter(specs);
data.icon.type = 'ui';

export default data;
