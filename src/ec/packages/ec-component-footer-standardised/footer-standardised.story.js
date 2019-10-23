import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

// import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import sections from './demo/data';
import footer from './footer-standardised.html.twig';
// import notes from './docs/footer-standardised.md';

// backToTop.icon.path = defaultSprite;
// identity.follow.links.forEach(link => {
//   if (link.icon) {
//     link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
//   }
// });
// sections.forEach(s => {
//   s.links.forEach(l => {
//     if (l.icon) {
//       l.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
//     }
//   });
// });

storiesOf('Components/Footers/Standardised', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => footer({ sections })
    // {
    //   notes: { markdown: notes },
    // }
  );
