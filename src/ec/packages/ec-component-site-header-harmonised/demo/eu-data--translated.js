import specs from '@ecl/eu-specs-site-header-harmonised/demo/data--fr';
import dataMenu from '../../ec-component-menu/demo/data--fr';
import adapter from '../adapter';

specs.logo.src_mobile = '/eu-logo-mobile-fr.svg';
specs.logo.src_desktop = '/eu-logo--fr.svg';
specs.menu = dataMenu;
specs.menu.site_name = 'Nom du site';

export default adapter(specs);
