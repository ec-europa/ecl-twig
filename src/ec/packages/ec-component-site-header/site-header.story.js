import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';

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
        language: {
          url: '/example',
          code: 'en',
          label: 'English',
        },
        header_link: {
          url: '/example-1',
          aria_label: 'European Commission',
        },
        header_image: {
          src: englishBanner,
          alt: 'European Commission logo',
          title: 'European Commission',
        },
        search_form: {
          button: {
            label: 'Search',
          },
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
          src: frenchBanner,
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
