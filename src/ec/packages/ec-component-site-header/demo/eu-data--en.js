import specs from '@ecl/eu-specs-site-header/demo/data--en';
import adapter from '../adapter';

specs.logo.src = '/eu-logo--en.svg';

export default adapter(specs);
