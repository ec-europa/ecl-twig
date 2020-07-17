import specs from '@ecl/ec-specs-site-header-harmonised/demo/data--group2';
import dataMenu from '../../ec-component-menu/demo/data--group2';
import adapter from '../adapter';

specs.menu = dataMenu;
specs.group = 'group2';
specs.logo.src_desktop = '/logo--en.svg';

export default adapter(specs);
