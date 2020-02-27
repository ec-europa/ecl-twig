/* eslint-disable no-param-reassign, no-shadow */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, button, text } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import logoEC from '@ecl/ec-resources-logo/logo--en.svg';
import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';
import dataGroup3 from './demo/data--group3';
import footerHarmonised from './ecl-footer-harmonised.html.twig';
import notes from './README.md';

// Icons.
const groups = [dataGroup1, dataGroup2];
groups.forEach(g => {
  g.sections.forEach(section => {
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
});

// Preserve the original data.
const logo0 = JSON.parse(JSON.stringify(dataGroup3.sections[1].logos[0]));
const logo1 = JSON.parse(JSON.stringify(dataGroup3.sections[1].logos[1]));
const contactUs = JSON.parse(JSON.stringify(dataGroup1.sections[1][0]));
const followUs = JSON.parse(JSON.stringify(dataGroup1.sections[1][1]));
const aboutUs = JSON.parse(JSON.stringify(dataGroup1.sections[2][0]));
const related = JSON.parse(JSON.stringify(dataGroup1.sections[2][1]));

let dataG1 = [...dataGroup1.sections];
const dataG2 = [...dataGroup2.sections];
const dataG3 = [...dataGroup3.sections];
// Labels for the buttons.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const useCasesGroup = 'Use cases';

// Buttons callbacks for optional elements.
// Group 3
const partnershipLogoBtnToggler = () => {
  if (dataG3[1].logos[0]) {
    delete dataG3[1].logos[0];
  } else {
    dataG3[1].logos[0] = logo0;
  }
};
const partnershipLogo1BtnToggler = () => {
  if (dataG3[1].logos[1]) {
    delete dataG3[1].logos[1];
  } else {
    dataG3[1].logos[1] = logo1;
  }
};
const resetG3BtnToggler = () => {
  dataG3[1].logos[0] = logo0;
  dataG3[1].logos[1] = logo1;
};
// Group 1
// Classes.
const classBtnToggler = () => {
  dataG1[3] = dataG1[3].links ? { section_id: 6 } : dataGroup1.sections[3];
};
// Dg related service navigation (contact us)
const serviceBtnToggler = () => {
  // If it's where is supposed to be, hide it
  if (dataG1[1][0].demo_id === 'contact_us') {
    dataG1[1][0] = { section_id: 2 };
  } else {
    // Two blocks might have taken its place.
    if (dataG1[1][1].demo_id === 'related') {
      dataG1[1][1] = { section_id: 2 };
      dataG1[2][1] = related;
      dataG1[2][1].section_id = 3;
    }
    if (dataG1[1][0].demo_id === 'about_us') {
      dataG1[1][0] = { section_id: 2 };
      dataG1[2][0] = aboutUs;
      dataG1[2][0].section_id = 3;
    }
    // Show it.
    dataG1[1][0] = contactUs;
    dataG1[1][0].section_id = 2;
  }
};
// Dg related service navigation. (follow us)
const socialBtnToggler = () => {
  // If it's where is supposed to be, hide it
  if (dataG1[1][1].demo_id === 'follow_us') {
    dataG1[1][1] = { section_id: 2 };
  } else {
    // Two blocks might have taken its place.
    if (dataG1[1][1].demo_id === 'related') {
      dataG1[1][1] = { section_id: 2 };
      dataG1[2][1] = related;
      dataG1[2][1].section_id = 3;
    }
    if (dataG1[1][0].demo_id === 'about_us') {
      dataG1[1][0] = { section_id: 2 };
      dataG1[2][0] = aboutUs;
      dataG1[2][0].section_id = 3;
    }
    // Show it.
    dataG1[1][1] = followUs;
    dataG1[1][1].section_id = 2;
  }
};
// Dg related navigation. (About us)
const aboutBtnToggler = () => {
  // No optional section is rendered.
  const emptyOptional =
    !dataG1[1][0].demo_id &&
    !dataG1[1][1].demo_id &&
    !dataG1[2][1].demo_id &&
    !dataG1[2][0].demo_id;
  // If it's where is supposed to be, hide it.
  if (dataG1[2][0].demo_id === 'about_us') {
    dataG1[2][0] = { section_id: 3 };
    // If it's in the other column, we hide it.
  } else if (dataG1[1][0].demo_id === 'about_us') {
    dataG1[1][0] = { section_id: 2 };
    // If no block is present or we have only one column.
  } else if (emptyOptional || dataG1[1][1].demo_id === 'related') {
    dataG1[1][0] = aboutUs;
    dataG1[1][0].section_id = 2;
    // We show it.
  } else {
    dataG1[2][0] = aboutUs;
    dataG1[2][0].section_id = 3;
  }
};
// Dg related navigation. (Related sites)
const relatedBtnToggler = () => {
  // No optional section is rendered.
  const emptyOptional =
    !dataG1[1][0].demo_id &&
    !dataG1[1][1].demo_id &&
    !dataG1[2][1].demo_id &&
    !dataG1[2][0].demo_id;
  // If it's where is supposed to be, hide it.
  if (dataG1[2][1].demo_id === 'related') {
    dataG1[2][1] = { section_id: 3 };
    // If it's in the other column, we hide it.
  } else if (dataG1[1][1].demo_id === 'related') {
    dataG1[1][1] = { section_id: 2 };
    // If no block is present or we have only one column.
  } else if (emptyOptional || dataG1[1][0].demo_id === 'about_us') {
    dataG1[1][1] = related;
    dataG1[1][1].section_id = 2;
    // We show it.
  } else {
    dataG1[2][1] = related;
    dataG1[2][1].section_id = 3;
  }
};
// Reset button.
const resetBtnToggler = () => {
  dataG1 = [...dataGroup1.sections];
  dataG1[1][0] = contactUs;
  dataG1[1][1] = followUs;
  dataG1[2][0] = aboutUs;
  dataG1[2][1] = related;
};

// Prepare the knobs for group3.
const formatFooterG3 = dataG3 => {
  dataG3[0].title = text('sections[0].title', dataG3[0].title, requiredGroupId);
  dataG3[1].logos.forEach((logo, index) => {
    let label = optionalGroupId;
    let logoSrc = dataG3[1].logos[index].logo.src;
    if (index === 2) {
      label = requiredGroupId;
      logoSrc = logoEC;
    }
    if (logo) {
      dataG3[1].logos[index].logo.title = text(
        `dataG3[1].logos[${index}].logo.title`,
        dataG3[1].logos[index].logo.title,
        label
      );
      dataG3[1].logos[index].logo.alt = text(
        `dataG3[1].logos[${index}].logo.alt`,
        dataG3[1].logos[index].logo.alt,
        label
      );
      dataG3[1].logos[index].logo.src = text(
        `dataG3[1].logos[${index}].logo.src`,
        logoSrc,
        label
      );
    }
  });

  // Return the full specs.
  return dataG3;
};

// Prepare the knobs for group2.
const formatFooterG2 = dataG2 => {
  // Corporate name.
  dataG2[0].title.link = {
    label: text(
      'sections[0].title.link.label',
      dataG2[0].title.link.label,
      requiredGroupId
    ),
    path: text(
      'sections[0].title.link.path',
      dataG2[0].title.link.path,
      requiredGroupId
    ),
    placeholder: text('', 'none', optionalGroupId),
  };
  // Service navigation.
  dataG2[1].links.forEach((link, index) => {
    dataG2[1].links[index].link.label = text(
      `sections[1].links[${index}].link.label`,
      dataG2[1].links[index].link.label,
      requiredGroupId
    );
    dataG2[1].links[index].link.path = text(
      `sections[1].links[${index}].link.path`,
      dataG2[1].links[index].link.path,
      requiredGroupId
    );
  });
  // Legal navigation.
  dataG2[2].links.forEach((link, index) => {
    dataG2[2].links[index].link.label = text(
      `sections[2].links[${index}].link.label`,
      dataG2[2].links[index].link.label,
      requiredGroupId
    );
    dataG2[2].links[index].link.path = text(
      `sections[2].links[${index}].link.path`,
      dataG2[2].links[index].link.path,
      requiredGroupId
    );
  });

  // Return the full specs.
  return dataG2;
};

// Prepare the knobs for group1
const formatFooterG1 = dataG1 => {
  // Swap the columns when needed.
  if (!dataG1[1][0].title && !dataG1[1][1].title) {
    dataG1[1][0] = dataG1[2][0].title ? aboutUs : { section_id: 2 };
    dataG1[1][1] = dataG1[2][1].title ? related : { section_id: 2 };
    dataG1[1][0].section_id = 2;
    dataG1[1][1].section_id = 2;
    dataG1[2] = [{ section_id: 3 }, { section_id: 3 }];
  }
  // Site name & content owner details.
  dataG1[0].title.link = {
    label: text(
      'sections[0].title.link.label',
      dataG1[0].title.link.label,
      requiredGroupId
    ),
    path: text(
      'sections[0].title.link.path',
      dataG1[0].title.link.path,
      requiredGroupId
    ),
  };
  dataG1[0].description = text(
    'sections[0].description',
    dataG1[0].description,
    requiredGroupId
  );
  // Classes.
  if (dataG1[3].links) {
    dataG1[3].content_before = text(
      'sections[3].content_before',
      dataG1[3].content_before,
      optionalGroupId
    );
    dataG1[3].list_class_name = text(
      'sections[3].list_class_name',
      dataG1[3].list_class_name,
      optionalGroupId
    );
    dataG1[3].links.forEach((link, index) => {
      dataG1[3].links[index].link.label = text(
        `sections[3].links[${index}].link.label`,
        dataG1[3].links[index].link.label,
        optionalGroupId
      );
      dataG1[3].links[index].link.path = text(
        `sections[3].links[${index}].link.path`,
        dataG1[3].links[index].link.path,
        optionalGroupId
      );
    });
  }
  // Corporate name.
  dataG1[4].title.link = {
    label: text(
      'sections[4].title.link.label',
      dataG1[4].title.link.label,
      requiredGroupId
    ),
    path: text(
      'sections[4].title.link.path',
      dataG1[4].title.link.path,
      requiredGroupId
    ),
  };
  // Service navigation.
  dataG1[5].links.forEach((link, index) => {
    dataG1[5].links[index].link.label = text(
      `sections[5].links[${index}].link.label`,
      dataG1[5].links[index].link.label,
      requiredGroupId
    );
    dataG1[5].links[index].link.path = text(
      `sections[5].links[${index}].link.path`,
      dataG1[5].links[index].link.path,
      requiredGroupId
    );
  });
  // Legal navigation.
  dataG1[6].links.forEach((link, index) => {
    dataG1[6].links[index].link.label = text(
      `sections[6].links[${index}].link.label`,
      dataG1[6].links[index].link.label,
      requiredGroupId
    );
    dataG1[6].links[index].link.path = text(
      `sections[6].links[${index}].link.path`,
      dataG1[6].links[index].link.path,
      requiredGroupId
    );
  });

  // Return the full specs.
  return dataG1;
};

storiesOf('Components/Footers/Harmonised', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'group 1',
    () => {
      button('With our without class names', classBtnToggler, useCasesGroup);
      button(
        'With our without DG-related service navigation (contact us)',
        serviceBtnToggler,
        useCasesGroup
      );
      button(
        'With our without DG-related service navigation (Follow us)',
        socialBtnToggler,
        useCasesGroup
      );
      button(
        'With our without DG-related navigation (About us)',
        aboutBtnToggler,
        useCasesGroup
      );
      button(
        'With our without DG-related navigation (Related sites)',
        relatedBtnToggler,
        useCasesGroup
      );
      button('Reset the layout', resetBtnToggler, useCasesGroup);

      return footerHarmonised({
        group: 'group1',
        sections: formatFooterG1(dataG1),
      });
    },
    {
      notes: { markdown: notes, json: { group: 'group1', sections: dataG1 } },
    }
  )
  .add(
    'group 2',
    () =>
      footerHarmonised({ group: 'group2', sections: formatFooterG2(dataG2) }),
    {
      notes: { markdown: notes, json: { group: 'group2', sections: dataG2 } },
    }
  )
  .add(
    'group 3',
    () => {
      button(
        'With or without first "Partnership logo"',
        partnershipLogoBtnToggler,
        useCasesGroup
      );
      button(
        'With or without second "Partnership logo"',
        partnershipLogo1BtnToggler,
        useCasesGroup
      );
      button('Reset the layout', resetG3BtnToggler, useCasesGroup);

      return footerHarmonised({
        group: 'group3',
        sections: formatFooterG3(dataG3),
      });
    },
    {
      notes: {
        markdown: notes,
        json: { group: 'group3', sections: formatFooterG3(dataG3) },
      },
    }
  );
