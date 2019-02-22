import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import siteHeaderDocs from './docs/site-header.md';
import siteHeader from './site-header.html.twig';

storiesOf('Components/Site Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      siteHeader({
        icon_file_path: defaultSprite,
        header_link: {
          url: '/example-1',
        },
      }),
    {
      notes: { markdown: siteHeaderDocs },
    }
  )
  .add(
    'translated',
    () =>
      siteHeader({
        icon_file_path: defaultSprite,
        language: {
          url: '/example',
          code: 'fr',
          label: 'Français',
        },
        header_link: {
          url: '/example-1',
          aria_label: 'Commmission Européenne',
        },
        header_image: {
          src: 'static/media/logo--fr.a8aaa7ab.svg',
          alt: 'Commmission Européenne logo',
          title: 'Commmission Européenne',
        },
        search_form: {
          button: {
            label: 'Recherche',
          },
        },
      }),
    {
      notes: { markdown: siteHeaderDocs },
    }
  );
