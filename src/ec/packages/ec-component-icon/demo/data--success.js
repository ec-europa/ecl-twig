import specs from '@ecl/ec-specs-icon/demo/data--success';
import adapter from '../adapter';

const data = adapter(specs);
data.icon.type = 'notifications';
data.icon.name = 'success';
export default data;
