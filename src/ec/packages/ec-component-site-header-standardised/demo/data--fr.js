import specs from '@ecl/ec-specs-site-header-standardised/demo/data--fr';
import dataMenu from '../../ec-component-menu/demo/data--fr';
import adapter from '../adapter';

specs.menu = dataMenu;
specs.logo.src_desktop = '/logo--fr.svg';

export default adapter(specs);
