import specs from '@ecl/ec-specs-icon/demo/data--audio';
import adapter from '../adapter';

const data = adapter(specs);
data.icon.type = 'general';
data.icon.name = 'audio';

export default data;
