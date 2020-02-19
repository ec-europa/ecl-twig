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
// Preserve the original data.
const logo0 = JSON.parse(JSON.stringify(dataGroup3.sections[0].logos[0]));
const logo1 = JSON.parse(JSON.stringify(dataGroup3.sections[0].logos[1]));
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
  dataG3[0].logos[0] = dataG3[0].logos[0] ? false : logo0;
  dataG3[0].logos[1] = dataG3[0].logos[1] ? false : logo1;
};
const resetG3BtnToggler = () => {
  dataG3[0].logos[0] = logo0;
  dataG3[0].logos[1] = logo1;
};
// Group 1
// Classes.
const classBtnToggler = () => {
  dataG1[5] = dataG1[5].key ? {} : dataGroup1.sections[5];
};
// Dg related service navigation (contact us)
const serviceBtnToggler = () => {
  dataG1[1] = dataG1[1].key ? {} : dataGroup1.sections[1];
};
// Dg related service navigation. (follow us)
const socialBtnToggler = () => {
  dataG1[3] = dataG1[3].key ? {} : dataGroup1.sections[3];
};
// Dg related navigation. (About us)
const aboutBtnToggler = () => {
  dataG1[2] = dataG1[2].key ? {} : dataGroup1.sections[2];
};
// Dg related navigation. (Related sites)
const relatedBtnToggler = () => {
  dataG1[4] = dataG1[4].key ? {} : dataGroup1.sections[4];
};
// Reset button.
const resetBtnToggler = () => {
  dataG1 = [...dataGroup1.sections];
};

// Prepare the knobs for group3.
const formatFooterG3 = dataG3 => {
  dataG3[0].title = text('sections[0].title', dataG3[0].title, requiredGroupId);
  dataG3[0].logos.forEach((logo, index) => {
    let label = optionalGroupId;
    let logoSrc = dataG3[0].logos[index].src;
    if (index === 2) {
      label = requiredGroupId;
      logoSrc = logoEC;
    }
    if (logo) {
      dataG3[0].logos[index].title = text(
        `dataG3[0].logos[${index}].title`,
        dataG3[0].logos[index].title,
        label
      );
      dataG3[0].logos[index].alt = text(
        `dataG3[0].logos[${index}].alt`,
        dataG3[0].logos[index].alt,
        label
      );
      dataG3[0].logos[index].src = text(
        `dataG3[0].logos[${index}].src`,
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
  // Dg related service navigation.
  if (dataG1[1].links) {
    dataG1[1].title = text(
      'sections[1].title',
      dataG1[1].title,
      optionalGroupId
    );
    dataG1[1].links.forEach((link, index) => {
      dataG1[1].links[index].link.label = text(
        `sections[1].links[${index}].link.label`,
        dataG1[1].links[index].link.label,
        optionalGroupId
      );
      dataG1[1].links[index].link.path = text(
        `sections[1].links[${index}].link.path`,
        dataG1[1].links[index].link.path,
        optionalGroupId
      );
    });
  }
  // About.
  if (dataG1[2].links) {
    dataG1[2].title = text(
      'sections[2].title',
      dataG1[2].title,
      optionalGroupId
    );
    dataG1[2].title_class_name = text(
      'sections[2].title_class_name',
      dataG1[2].title_class_name,
      optionalGroupId
    );
    dataG1[2].links.forEach((link, index) => {
      dataG1[2].links[index].link.label = text(
        `sections[2].links[${index}].link.label`,
        dataG1[2].links[index].link.label,
        optionalGroupId
      );
      dataG1[2].links[index].link.path = text(
        `sections[2].links[${index}].link.path`,
        dataG1[2].links[index].link.path,
        optionalGroupId
      );
    });
  }
  if (dataG1[3].links) {
    // Follow us.
    dataG1[3].title = text(
      'sections[3].title',
      dataG1[3].title,
      optionalGroupId
    );
    dataG1[3].title_class_name = text(
      'sections[3].title_class_name',
      dataG1[3].title_class_name,
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
      dataG1[3].links[index].icon.name = text(
        `sections[3].links[${index}].icon.name`,
        dataG1[3].links[index].icon.name,
        optionalGroupId
      );
      dataG1[3].links[index].icon.path = text(
        `sections[3].links[${index}].icon.path`,
        defaultSprite,
        optionalGroupId
      );
      dataG1[3].links[index].icon.size = text(
        `sections[3].links[${index}].icon.size`,
        dataG1[3].links[index].icon.size,
        optionalGroupId
      );
    });
  }
  // Related.
  if (dataG1[4].links) {
    dataG1[4].title = text(
      'sections[4].title',
      dataG1[4].title,
      optionalGroupId
    );
    dataG1[2].title_class_name = text(
      'sections[4].title_class_name',
      dataG1[4].title_class_name,
      optionalGroupId
    );
    dataG1[4].links.forEach((link, index) => {
      dataG1[4].links[index].link.label = text(
        `sections[4].links[${index}].link.label`,
        dataG1[4].links[index].link.label,
        optionalGroupId
      );
      dataG1[4].links[index].link.path = text(
        `sections[4].links[${index}].link.path`,
        dataG1[4].links[index].link.path,
        optionalGroupId
      );
    });
  }
  // Classes.
  if (dataG1[5].links) {
    dataG1[5].content_before = text(
      'sections[5].content_before',
      dataG1[5].content_before,
      optionalGroupId
    );
    dataG1[5].list_class_name = text(
      'sections[5].list_class_name',
      dataG1[5].list_class_name,
      optionalGroupId
    );
    dataG1[5].links.forEach((link, index) => {
      dataG1[5].links[index].link.label = text(
        `sections[5].links[${index}].link.label`,
        dataG1[5].links[index].link.label,
        optionalGroupId
      );
      dataG1[5].links[index].link.path = text(
        `sections[5].links[${index}].link.path`,
        dataG1[5].links[index].link.path,
        optionalGroupId
      );
    });
  }
  // Corporate name.
  dataG1[6].title.link = {
    label: text(
      'sections[6].title.link.label',
      dataG1[6].title.link.label,
      requiredGroupId
    ),
    path: text(
      'sections[6].title.link.path',
      dataG1[6].title.link.path,
      requiredGroupId
    ),
  };
  // Service navigation.
  dataG1[7].links.forEach((link, index) => {
    dataG1[7].links[index].link.label = text(
      `sections[7].links[${index}].link.label`,
      dataG1[7].links[index].link.label,
      requiredGroupId
    );
    dataG1[7].links[index].link.path = text(
      `sections[7].links[${index}].link.path`,
      dataG1[7].links[index].link.path,
      requiredGroupId
    );
  });
  // Legal navigation.
  dataG1[8].links.forEach((link, index) => {
    dataG1[8].links[index].link.label = text(
      `sections[8].links[${index}].link.label`,
      dataG1[8].links[index].link.label,
      requiredGroupId
    );
    dataG1[8].links[index].link.path = text(
      `sections[8].links[${index}].link.path`,
      dataG1[8].links[index].link.path,
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
        'With or without "Partnership logo"',
        partnershipLogoBtnToggler,
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
