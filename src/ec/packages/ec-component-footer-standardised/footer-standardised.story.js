/* eslint-disable no-shadow, dot-notation */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, button, text } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import sections from './demo/data';
import footerStandardised from './ecl-footer-standardised.html.twig';
import notes from './README.md';

// Icons.
sections.sections.forEach(section => {
  if (!Array.isArray(section)) {
    section = [section];
  }
  section.forEach(s => {
    if (s.links && Array.isArray(s.links)) {
      s.links.forEach(l => {
        if (l.icon) {
          l.icon.path = defaultSprite;
        }
      });
    }
    if (s.title && s.title.icon) {
      s.title.icon.path = defaultSprite;
    }
  });
});

const contactUs = JSON.parse(JSON.stringify(sections.sections[1][0]));
const followUs = JSON.parse(JSON.stringify(sections.sections[1][1]));
const aboutUs = JSON.parse(JSON.stringify(sections.sections[2][0]));
const related = JSON.parse(JSON.stringify(sections.sections[2][1]));

// Preserve the original data.
let data = [...sections.sections];

// Buttons callbacks.
// Dg related service navigation (contact us)
const serviceBtnToggler = () => {
  // If it's where is supposed to be, hide it
  if (data[1][0].demo_id === 'contact_us') {
    data[1][0] = { section_id: 2 };
  } else {
    // Two blocks might have taken its place.
    if (data[1][1].demo_id === 'related') {
      data[1][1] = { section_id: 2 };
      data[2][1] = related;
      data[2][1].section_id = 3;
    }
    if (data[1][0].demo_id === 'about_us') {
      data[1][0] = { section_id: 2 };
      data[2][0] = aboutUs;
      data[2][0].section_id = 3;
    }
    // Show it.
    data[1][0] = contactUs;
    data[1][0].section_id = 2;
  }
};
// Dg related service navigation. (follow us)
const socialBtnToggler = () => {
  // If it's where is supposed to be, hide it
  if (data[1][1].demo_id === 'follow_us') {
    data[1][1] = { section_id: 2 };
  } else {
    // Two blocks might have taken its place.
    if (data[1][1].demo_id === 'related') {
      data[1][1] = { section_id: 2 };
      data[2][1] = related;
      data[2][1].section_id = 3;
    }
    if (data[1][0].demo_id === 'about_us') {
      data[1][0] = { section_id: 2 };
      data[2][0] = aboutUs;
      data[2][0].section_id = 3;
    }
    // Show it.
    data[1][1] = followUs;
    data[1][1].section_id = 2;
  }
};
// Dg related navigation. (About us)
const aboutBtnToggler = () => {
  // No optional section is rendered.
  const emptyOptional =
    !data[1][0].demo_id &&
    !data[1][1].demo_id &&
    !data[2][1].demo_id &&
    !data[2][0].demo_id;
  // If it's where is supposed to be, hide it.
  if (data[2][0].demo_id === 'about_us') {
    data[2][0] = { section_id: 3 };
    // If it's in the other column, we hide it.
  } else if (data[1][0].demo_id === 'about_us') {
    data[1][0] = { section_id: 2 };
    // If no block is present or we have only one column.
  } else if (emptyOptional || data[1][1].demo_id === 'related') {
    data[1][0] = aboutUs;
    data[1][0].section_id = 2;
    // We show it.
  } else {
    data[2][0] = aboutUs;
    data[2][0].section_id = 3;
  }
};
// Dg related navigation. (Related sites)
const relatedBtnToggler = () => {
  // No optional section is rendered.
  const emptyOptional =
    !data[1][0].demo_id &&
    !data[1][1].demo_id &&
    !data[2][1].demo_id &&
    !data[2][0].demo_id;
  // If it's where is supposed to be, hide it.
  if (data[2][1].demo_id === 'related') {
    data[2][1] = { section_id: 3 };
    // If it's in the other column, we hide it.
  } else if (data[1][1].demo_id === 'related') {
    data[1][1] = { section_id: 2 };
    // If no block is present or we have only one column.
  } else if (emptyOptional || data[1][0].demo_id === 'about_us') {
    data[1][1] = related;
    data[1][1].section_id = 2;
    // We show it.
  } else {
    data[2][1] = related;
    data[2][1].section_id = 3;
  }
};
// Reset button.
const resetBtnToggler = () => {
  data = [...sections.sections];
  data[1][0] = contactUs;
  data[1][1] = followUs;
  data[2][0] = aboutUs;
  data[2][1] = related;
};
// Prepare the knobs for group1
const formatFooter = data => {
  button(
    'With or without DG-related service navigation (contact us)',
    serviceBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without DG-related service navigation (Follow us)',
    socialBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without DG-related navigation (About us)',
    aboutBtnToggler,
    tabLabels.cases
  );
  button(
    'With or without DG-related navigation (Related sites)',
    relatedBtnToggler,
    tabLabels.cases
  );
  button('Reset the layout', resetBtnToggler, tabLabels.cases);
  // Swap the columns when needed.
  if (!data[1][0].title && !data[1][1].title) {
    data[1][0] = data[2][0].title ? aboutUs : { section_id: 2 };
    data[1][1] = data[2][1].title ? related : { section_id: 2 };
    data[1][0].section_id = 2;
    data[1][1].section_id = 2;
    data[2] = [{ section_id: 3 }, { section_id: 3 }];
  }
  // Site name & content owner details.
  data[0].title.link = {
    label: text(
      'sections[0].title.link.label',
      data[0].title.link.label,
      tabLabels.required
    ),
    path: text(
      'sections[0].title.link.path',
      data[0].title.link.path,
      tabLabels.required
    ),
  };
  data[0].description = text(
    'sections[0].description',
    data[0].description,
    tabLabels.required
  );
  // Classes.
  if (data[3].links) {
    data[3].content_before = text(
      'sections[3].content_before',
      data[3].content_before,
      tabLabels.optional
    );
    data[3].list_class_name = text(
      'sections[3].list_class_name',
      data[3].list_class_name,
      tabLabels.optional
    );
    data[3].links.forEach((link, index) => {
      data[3].links[index].link.label = text(
        `sections[3].links[${index}].link.label`,
        data[3].links[index].link.label,
        tabLabels.optional
      );
      data[3].links[index].link.path = text(
        `sections[3].links[${index}].link.path`,
        data[3].links[index].link.path,
        tabLabels.optional
      );
    });
  }
  // Corporate name.
  data[4].title.link = {
    label: text(
      'sections[4].title.link.label',
      data[4].title.link.label,
      tabLabels.required
    ),
    path: text(
      'sections[4].title.link.path',
      data[4].title.link.path,
      tabLabels.required
    ),
  };
  // Service navigation.
  data[5].links.forEach((link, index) => {
    data[5].links[index].link.label = text(
      `sections[5].links[${index}].link.label`,
      data[5].links[index].link.label,
      tabLabels.required
    );
    data[5].links[index].link.path = text(
      `sections[5].links[${index}].link.path`,
      data[5].links[index].link.path,
      tabLabels.required
    );
  });
  // Legal navigation.
  data[6].links.forEach((link, index) => {
    data[6].links[index].link.label = text(
      `sections[6].links[${index}].link.label`,
      data[6].links[index].link.label,
      tabLabels.required
    );
    data[6].links[index].link.path = text(
      `sections[6].links[${index}].link.path`,
      data[6].links[index].link.path,
      tabLabels.required
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  // Return the full specs.
  return data;
};

storiesOf('Components/Footers/Standardised', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      return footerStandardised({
        sections: formatFooter(data),
        extra_classes: data.extra_classes,
        extra_attributes: data.extra_attributes,
        _compliance_: data['_compliance_'],
      });
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
