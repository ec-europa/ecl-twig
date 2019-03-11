import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import breadcrumbDataSimple from '@ecl/ec-specs-breadcrumb/demo/data-simple';
import breadcrumbDataLong from '@ecl/ec-specs-breadcrumb/demo/data';

import breadcrumbDocs from './README.md';
import breadcrumb from './breadcrumb.html.twig';

function formatLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

const simpleBreadcrumbLinks = breadcrumbDataSimple.items.map(formatLink);
const longBreadcrumbLinks = breadcrumbDataLong.items.map(formatLink);

storiesOf('Components/Breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'simple',
    () =>
      breadcrumb({
        links: simpleBreadcrumbLinks,
        icon_file_path: defaultSprite,
        navigation_text: breadcrumbDataSimple.label,
        ellipsis_label: 'Click to expand',
      }),
    {
      notes: { markdown: breadcrumbDocs },
    }
  )
  .add(
    'long',
    () => {
      const html = breadcrumb({
        links: longBreadcrumbLinks,
        icon_file_path: defaultSprite,
        navigation_text: breadcrumbDataLong.label,
        ellipsis_label: 'Click to expand',
      });

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var breadcrumbElement = document.querySelector("[data-ecl-breadcrumb]");
      var breadcrumb = new ECL.Breadcrumb(breadcrumbElement);
      breadcrumb.init();
      `;
      demo.appendChild(scriptElement);

      return demo;
    },
    {
      notes: { markdown: breadcrumbDocs },
    }
  );
