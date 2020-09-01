import specs from '@ecl/ec-specs-site-header-standardised/demo/data--en';
import dataMenu from '../../ec-component-menu/demo/data--en';
import adapter from '../adapter';

specs.menu = dataMenu;
specs.logo.src_desktop = '/logo--en.svg';

export default adapter(specs);
