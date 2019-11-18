/* eslint-disable import/no-extraneous-dependencies, unicorn/filename-case */
import specTile from '@ecl/ec-specs-card/demo/data--tile';
import adapter from './adapter';

specTile.type = 'tile';

export default adapter(specTile);
