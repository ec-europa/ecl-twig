/* eslint-disable no-param-reassign, no-shadow */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, button, text } from '@storybook/addon-knobs';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import sections from './demo/data';
import footerStandardised from './ecl-footer-standardised.html.twig';
import notes from './README.md';

// Preserve the original data.
let data = [...sections.sections];
// Labels for the buttons.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const useCasesGroup = 'Use cases';
// Buttons callbacks.
const classBtnToggler = () => {
  data[5] = data[5].key ? {} : sections.sections[5];
};
// Dg related service navigation (contact us)
const serviceBtnToggler = () => {
  data[1] = data[1].key ? {} : sections.sections[1];
};
// Dg related service navigation. (follow us)
const socialBtnToggler = () => {
  data[3] = data[3].key ? {} : sections.sections[3];
};
// Dg related navigation. (About us)
const aboutBtnToggler = () => {
  data[2] = data[2].key ? {} : sections.sections[2];
};
// Dg related navigation. (Related sites)
const relatedBtnToggler = () => {
  data[4] = data[4].key ? {} : sections.sections[4];
};
// Reset button.
const resetBtnToggler = () => {
  data = [...sections.sections];
};
// Prepare the knobs.
const formatFooter = data => {
  // Site name & content owner details.
  data[0].title.link = {
    label: text(
      'sections[0].title.link.label',
      data[0].title.link.label,
      requiredGroupId
    ),
    path: text(
      'sections[0].title.link.path',
      data[0].title.link.path,
      requiredGroupId
    ),
  };
  data[0].description = text(
    'sections[0].description',
    data[0].description,
    requiredGroupId
  );
  // Dg related service navigation.
  if (data[1].links) {
    data[1].title = text('sections[1].title', data[1].title, optionalGroupId);
    data[1].links.forEach((link, index) => {
      data[1].links[index].link.label = text(
        `sections[1].links[${index}].link.label`,
        data[1].links[index].link.label,
        optionalGroupId
      );
      data[1].links[index].link.path = text(
        `sections[1].links[${index}].link.path`,
        data[1].links[index].link.path,
        optionalGroupId
      );
    });
  }
  // About.
  if (data[2].links) {
    data[2].title = text('sections[2].title', data[2].title, optionalGroupId);
    data[2].title_class_name = text(
      'sections[2].title_class_name',
      data[2].title_class_name,
      optionalGroupId
    );
    data[2].links.forEach((link, index) => {
      data[2].links[index].link.label = text(
        `sections[2].links[${index}].link.label`,
        data[2].links[index].link.label,
        optionalGroupId
      );
      data[2].links[index].link.path = text(
        `sections[2].links[${index}].link.path`,
        data[2].links[index].link.path,
        optionalGroupId
      );
    });
  }
  if (data[3].links) {
    // Follow us.
    data[3].title = text('sections[3].title', data[3].title, optionalGroupId);
    data[3].title_class_name = text(
      'sections[3].title_class_name',
      data[3].title_class_name,
      optionalGroupId
    );
    data[3].list_class_name = text(
      'sections[3].list_class_name',
      data[3].list_class_name,
      optionalGroupId
    );
    data[3].links.forEach((link, index) => {
      data[3].links[index].link.label = text(
        `sections[3].links[${index}].link.label`,
        data[3].links[index].link.label,
        optionalGroupId
      );
      data[3].links[index].link.path = text(
        `sections[3].links[${index}].link.path`,
        data[3].links[index].link.path,
        optionalGroupId
      );
      data[3].links[index].icon.name = text(
        `sections[3].links[${index}].icon.name`,
        data[3].links[index].icon.name,
        optionalGroupId
      );
      data[3].links[index].icon.path = text(
        `sections[3].links[${index}].icon.path`,
        defaultSprite,
        optionalGroupId
      );
      data[3].links[index].icon.size = text(
        `sections[3].links[${index}].icon.size`,
        data[3].links[index].icon.size,
        optionalGroupId
      );
    });
  }
  // Related.
  if (data[4].links) {
    data[4].title = text('sections[4].title', data[4].title, optionalGroupId);
    data[2].title_class_name = text(
      'sections[4].title_class_name',
      data[4].title_class_name,
      optionalGroupId
    );
    data[4].links.forEach((link, index) => {
      data[4].links[index].link.label = text(
        `sections[4].links[${index}].link.label`,
        data[4].links[index].link.label,
        optionalGroupId
      );
      data[4].links[index].link.path = text(
        `sections[4].links[${index}].link.path`,
        data[4].links[index].link.path,
        optionalGroupId
      );
    });
  }
  // Classes.
  if (data[5].links) {
    data[5].content_before = text(
      'sections[5].content_before',
      data[5].content_before,
      optionalGroupId
    );
    data[5].list_class_name = text(
      'sections[5].list_class_name',
      data[5].list_class_name,
      optionalGroupId
    );
    data[5].links.forEach((link, index) => {
      data[5].links[index].link.label = text(
        `sections[5].links[${index}].link.label`,
        data[5].links[index].link.label,
        optionalGroupId
      );
      data[5].links[index].link.path = text(
        `sections[5].links[${index}].link.path`,
        data[5].links[index].link.path,
        optionalGroupId
      );
    });
  }
  // Corporate name.
  data[6].title.link = {
    label: text(
      'sections[6].title.link.label',
      data[6].title.link.label,
      requiredGroupId
    ),
    path: text(
      'sections[6].title.link.path',
      data[6].title.link.path,
      requiredGroupId
    ),
  };
  // Service navigation.
  data[7].links.forEach((link, index) => {
    data[7].links[index].link.label = text(
      `sections[7].links[${index}].link.label`,
      data[7].links[index].link.label,
      requiredGroupId
    );
    data[7].links[index].link.path = text(
      `sections[7].links[${index}].link.path`,
      data[7].links[index].link.path,
      requiredGroupId
    );
  });
  // Legal navigation.
  data[8].links.forEach((link, index) => {
    data[8].links[index].link.label = text(
      `sections[8].links[${index}].link.label`,
      data[8].links[index].link.label,
      requiredGroupId
    );
    data[8].links[index].link.path = text(
      `sections[8].links[${index}].link.path`,
      data[8].links[index].link.path,
      requiredGroupId
    );
  });
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
      button('With or without class names', classBtnToggler, useCasesGroup);
      button(
        'With or without DG-related service navigation (contact us)',
        serviceBtnToggler,
        useCasesGroup
      );
      button(
        'With or without DG-related service navigation (Follow us)',
        socialBtnToggler,
        useCasesGroup
      );
      button(
        'With or without DG-related navigation (About us)',
        aboutBtnToggler,
        useCasesGroup
      );
      button(
        'With or without DG-related navigation (Related sites)',
        relatedBtnToggler,
        useCasesGroup
      );
      button('Reset the layout', resetBtnToggler, useCasesGroup);

      return footerStandardised({ sections: formatFooter(data) });
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
