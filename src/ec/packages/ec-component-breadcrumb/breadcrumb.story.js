import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import breadcrumbDocs from './docs/breadcrumb.md';
import breadcrumb from './breadcrumb.html.twig';

storiesOf('Components/Breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'simple',
    () => {
      const html = breadcrumb({
        links: [
          {
            label: 'Home',
            path: '/example',
          },
          {
            label: 'About the European Commission',
            path: '/example',
          },
          {
            label: 'News',
            path: '/example',
          },
        ],
        icon_file_path: defaultSprite,
        navigation_text: 'You are here:',
      });

      const script = `document.querySelector(".ecl-breadcrumb").innerHTML = '<p>HACKED</p>'`;

      const demo = document.createElement('div');
      demo.innerHTML = html;
      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = script;
      demo.append(scriptElement);

      return demo;
    },
    {
      notes: { markdown: breadcrumbDocs },
    }
  )
  .add(
    'long',
    () =>
      breadcrumb({
        links: [
          {
            label: 'Home',
            path: '/example',
          },
          {
            label: 'About the European Commission',
            path: '/example',
          },
          {
            label: 'News',
            path: '/example',
          },
          {
            label: 'Organisational structure',
            path: '/example',
          },
          {
            label: 'How the Commission is organised',
            path: '/example',
          },
          {
            label: 'News',
            path: '/example',
          },
        ],
        icon_file_path: defaultSprite,
        navigation_text: 'You are here:',
      }),
    {
      notes: { markdown: breadcrumbDocs },
    }
  );
