/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  buttonLabels,
  getBrandedIconsOptions,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-social-icons/dist/sprites/icons-social.svg';
import demoData from './demo/data';

import SocialMediaShare from './ecl-social-media-share.html.twig';
import notes from './README.md';

const prepareSocialMediaShare = data => {
  data.description = text(
    'description',
    data.description,
    buttonLabels.required
  );

  data.links.forEach((link, i) => {
    let label = buttonLabels.optional;
    // Firt item we make it mandatory and not removable.
    if (i === 0) {
      label = buttonLabels.required;
      link.label = select(
        `links[${i}].link.label`,
        getBrandedIconsOptions(true),
        link.label,
        label
      );
      link.path = text(`links[${i}].link.path`, link.path, label);
      link.icon.forEach((icon, idx) => {
        let options = getBrandedIconsOptions(false);
        if (idx === 1) {
          options = getBrandedIconsOptions(false, false, true);
        }
        icon.name = select(
          `links[${i}].link.icon[${idx}].name`,
          options,
          icon.name,
          label
        );
        icon.path = select(
          `links[${i}].link.icon[${idx}].path`,
          [defaultSprite],
          defaultSprite,
          label
        );
        icon.size = select(
          `links[${i}].link.icon[${idx}].size`,
          ['xl'],
          'xl',
          label
        );
        icon.extra_classes = text(
          `links[${i}].link.icon[${idx}].extra_classes`,
          icon.extra_classes,
          label
        );
      });
    } else {
      // All the other items.
      if (data.links[i].label && data.links[i].path) {
        let linkOptions = getBrandedIconsOptions(true);
        if (!data.links[i].icon) {
          linkOptions = getBrandedIconsOptions(true, true);
        }
        link.label = select(
          `links[${i}].link.label`,
          linkOptions,
          link.label,
          label
        );
        link.path = text(`links[${i}].link.path`, link.path, label);
      }
      // If the option none has been selected we remove the item safely
      // since we know it can only be: Other social media
      if (link.label === 'none') {
        data.links[i].label = {};
      }
      // Icons.
      if (data.links[i].icon && data.links[i].icon[0]) {
        link.icon.forEach((icon, idx) => {
          let iconOptions = getBrandedIconsOptions(false, true);
          if (idx === 1) {
            iconOptions = getBrandedIconsOptions(false, true, true);
          }
          icon.name = select(
            `links[${i}].link.icon[${idx}].name`,
            iconOptions,
            icon.name,
            label
          );
          icon.path = select(
            `links[${i}].link.icon[${idx}].path`,
            [defaultSprite],
            defaultSprite,
            label
          );
          icon.size = select(
            `links[${i}].link.icon[${idx}].size`,
            ['xl'],
            'xl',
            label
          );
          icon.extra_classes = text(
            `links[${i}].link.icon[${idx}].extra_classes`,
            icon.extra_classes,
            label
          );
          // If a 'none' icon has been selected we reset the item not to
          // show the link anymore.
          if (icon.name === 'none') {
            data.links[i].label = '';
            data.links[i].path = '';
            data.links[i].icon = {};
          }
        });
      }
    }
  });

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Social Media Share', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => SocialMediaShare(prepareSocialMediaShare(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
