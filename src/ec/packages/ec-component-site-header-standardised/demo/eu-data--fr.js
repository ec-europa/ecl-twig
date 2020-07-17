import specs from '@ecl/eu-specs-site-header-standardised/demo/data--fr';
import dataMenu from '../../ec-component-menu/demo/data--fr';
import adapter from '../adapter';

specs.menu = dataMenu;
specs.logo.src_mobile = '/eu-logo-mobile-fr.svg';
specs.logo.src_desktop = '/eu-logo--fr.svg';

export default adapter(specs);
