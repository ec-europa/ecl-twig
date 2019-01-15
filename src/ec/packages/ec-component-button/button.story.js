import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

// Import data for demos
import dataPrimary from '@ecl/ec-specs-button/demo/data--primary';
import dataSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import dataCall from '@ecl/ec-specs-button/demo/data--call';
import dataGhost from '@ecl/ec-specs-button/demo/data--ghost';
import dataSearch from '@ecl/ec-specs-button/demo/data--search';

import button from './button.html.twig';

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .add('primary', () =>
    button({
      label: text('Label', dataPrimary.label),
      variant: dataPrimary.variant,
    })
  )
  .add('secondary', () =>
    button({
      label: text('Label', dataSecondary.label),
      variant: dataSecondary.variant,
    })
  )
  .add('call-to-action', () =>
    button({
      label: text('Label', dataCall.label),
      variant: dataCall.variant,
    })
  )
  .add('ghost', () =>
    button({
      label: text('Label', dataGhost.label),
      variant: dataGhost.variant,
    })
  )
  .add('search', () =>
    button({
      label: text('Label', dataSearch.label),
      variant: dataSearch.variant,
    })
  );
