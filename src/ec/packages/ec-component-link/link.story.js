import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getIconKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataDefault from './demo/data--default';
import dataCta from './demo/data--cta';
import dataStandalone from './demo/data--standalone';
import link from './ecl-link.html.twig';
import notes from './README.md';

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

const prepareLink = data => {
  let typeLabel = tabLabels.required;
  if (data.link.type === 'default' || data.link.label === '') {
    typeLabel = tabLabels.optional;
  }
  data.link.path = text('link.path', data.link.path, tabLabels.required);
  data.link.label = text('link.label', data.link.label, tabLabels.optional);
  data.link.type = select(
    'link.type',
    [data.link.type],
    data.link.type,
    typeLabel
  );

  getExtraKnobs(data);

  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Navigation/Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const dataStory = prepareLink(dataDefault);

      const name = select('icon.name', iconsList, null, tabLabels.optional);
      if (name !== null) {
        getIconKnobs(dataStory, name, 'ui', 'xs');
      } else if (name === null && dataStory.icon) {
        delete dataStory.icon.name;
      }

      const demo = document.createDocumentFragment();
      const wrapper = document.createElement('p');
      wrapper.className = 'ecl-u-type-paragraph';
      wrapper.setAttribute('demo_only', true);
      wrapper.innerHTML = link(dataStory);
      demo.appendChild(wrapper);

      return demo;
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'standalone',
    () => {
      const dataStory = prepareLink(dataStandalone);
      const name = select('icon.name', iconsList, null, tabLabels.optional);
      if (name !== null) {
        getIconKnobs(dataStory, name, 'ui', 'xs');
      } else if (name === null && dataStory.icon) {
        delete dataStory.icon.name;
      }

      return link(dataStory);
    },
    {
      notes: { markdown: notes, json: dataStandalone },
    }
  )
  .add(
    'cta',
    () => {
      const dataStory = prepareLink(dataCta);
      const name = select(
        'icon.name',
        iconsList,
        'rounded-arrow',
        tabLabels.optional
      );
      if (name !== null) {
        getIconKnobs(dataStory, name, 'ui', 'xs', '', 'rotate-90', true);
      } else if (name === null && dataStory.icon) {
        delete dataStory.icon.name;
      }

      return link(dataStory);
    },
    {
      notes: { markdown: notes, json: dataCta },
    }
  );
