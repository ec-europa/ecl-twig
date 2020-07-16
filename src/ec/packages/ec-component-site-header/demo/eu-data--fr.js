import specs from '@ecl/eu-specs-site-header/demo/data--fr';
import adapter from '../adapter';

specs.logo.src = '/eu-logo--fr.svg';

export default adapter(specs);
