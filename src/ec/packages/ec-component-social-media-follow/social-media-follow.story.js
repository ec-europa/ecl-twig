/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import defaultSprite from '@ecl/ec-resources-social-icons/dist/sprites/icons-social.svg';
import demoData from './demo/data';
import SocialMediaFollow from './ecl-social-media-follow.html.twig';
import notes from './README.md';

/**
 * Helper function to retrieve options to pass to the knobs.
 *
 * @param {boolean} labels - It returns the strings capitalized.
 * @param {boolean} none - It adds the option 'none'.
 */
const brandedIconsOptions = (labels, none) => {
  const options = [];
  if (none) {
    options.push('none');
  }
  if (labels) {
    options.push('Other social networks');
    brandedIcons.forEach(icon => {
      options.push(icon.charAt(0).toUpperCase() + icon.slice(1));
    });
  } else {
    brandedIcons.forEach(icon => {
      options.push(icon);
    });
  }

  return options;
};

/**
 * Helper function to retrieve options to pass to the knobs.
 *
 * @param {boolean} none - It adds the option 'none'.
 */
const brandedIconsHoverOptions = none => {
  let options = [];
  if (none) {
    options = ['none'];
  }
  brandedIcons.forEach(icon => {
    options.push(`${icon}_hover`);
  });

  return options;
};

const prepareSocialMediaFollow = (data, vertical) => {
  data.description = text(
    'description',
    data.description,
    buttonLabels.required
  );
  if (vertical) {
    data.variant = select(
      'variant',
      [vertical],
      'vertical',
      buttonLabels.required
    );
  } else {
    delete data.variant;
  }

  data.links.forEach((link, i) => {
    let label = buttonLabels.optional;
    // Firt item we make it mandatory and not removable.
    if (i === 0) {
      label = buttonLabels.required;
      link.label = select(
        `links[${i}].link.label`,
        brandedIconsOptions(true),
        link.label,
        label
      );
      link.path = text(`links[${i}].link.path`, link.path, label);
      link.icon.forEach((icon, idx) => {
        let options = brandedIconsOptions(false);
        if (idx === 1) {
          options = brandedIconsHoverOptions();
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
        let linkOptions = brandedIconsOptions(true);
        if (!data.links[i].icon) {
          linkOptions = brandedIconsOptions(true, true);
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
        data.links[i] = {};
      }
      // Icons.
      if (data.links[i].icon && data.links[i].icon[0]) {
        link.icon.forEach((icon, idx) => {
          let iconOptions = brandedIconsOptions(false, true);
          if (idx === 1) {
            iconOptions = brandedIconsHoverOptions(true);
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

storiesOf('Components/Social Media Follow', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'horizontal',
    () => SocialMediaFollow(prepareSocialMediaFollow(demoData)),
    {
      notes: { markdown: notes, json: demoData },
    }
  )
  .add(
    'vertical',
    () => SocialMediaFollow(prepareSocialMediaFollow(demoData, 'vertical')),
    {
      notes: { markdown: notes, json: demoData },
    }
  );
