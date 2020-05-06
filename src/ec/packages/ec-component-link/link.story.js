import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataDefault from './demo/data--default';
import dataCta from './demo/data--cta';
import dataStandalone from './demo/data--standalone';
import link from './ecl-link.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

const transforms = {
  None: '',
  'Rotate 90': 'rotate-90',
  'Rotate 180': 'rotate-180',
  'Rotate 270': 'rotate-270',
  'Flip horizontal': 'flip-horizontal',
  'Flip vertical': 'flip-vertical',
};
const iconPositionSettings = {
  before: 'before',
  after: 'after',
};

const prepareLink = data => {
  data.link.href = select(
    'link.path',
    [data.link.path],
    data.link.path,
    requiredGroupId
  );
  data.link.type = select(
    'link.type',
    [data.link.type],
    data.link.type,
    requiredGroupId
  );

  data.extra_classes = text('extra_classes', '', optionalGroupId);
  const attribute1Name = text('extra_attributes[0].name', '', optionalGroupId);
  // First attribute.
  if (attribute1Name !== '') {
    data.extra_attributes = [];
    let attribute = {};
    const attribute1Value = text(
      'extra_attributes[0].value',
      '',
      optionalGroupId
    );
    const attribute2Name = text(
      'extra_attributes[1].name',
      '',
      optionalGroupId
    );
    attribute.name = attribute1Name;
    if (attribute1Value !== '') {
      attribute.value = attribute1Value;
    }
    data.extra_attributes.push(attribute);
    // Second attribute.
    if (attribute2Name !== '') {
      const attribute2Value = text(
        'extra_attributes[1].value',
        '',
        optionalGroupId
      );
      attribute = {};
      attribute.name = attribute2Name;
      if (attribute2Value !== '') {
        attribute.value = attribute2Value;
      }
      data.extra_attributes.push(attribute);
    }
  } else {
    delete data.extra_attributes;
  }

  return data;
};

const prepareIcon = (name, data) => {
  const icon = {};
  icon.name = name;
  icon.type = select('icon.type', ['ui'], 'ui', optionalGroupId);
  icon.path = select(
    'icon.path',
    [defaultSprite],
    defaultSprite,
    optionalGroupId
  );
  icon.size = select('icon.size', ['xs'], 'xs', optionalGroupId);
  icon.transform = select('icon.transform', transforms, '', optionalGroupId);
  if (icon) {
    data.icon = icon;
    data.link.icon_position = select(
      'link.icon_position',
      iconPositionSettings,
      'after',
      optionalGroupId
    );
  }
};

storiesOf('Components/Navigation/Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const dataStory = prepareLink(dataDefault);
      dataStory.link.label = text(
        'link.label',
        dataStory.link.label,
        requiredGroupId
      );
      dataStory.link.type = select(
        'link.type',
        [dataStory.link.type],
        dataStory.link.type,
        requiredGroupId
      );
      const name = select('icon.name', iconsList, null, optionalGroupId);
      if (name !== null) {
        prepareIcon(name, dataStory);
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
      dataStory.link.label = text(
        'link.label',
        'Standalone link',
        requiredGroupId
      );
      dataStory.link.type = select(
        'link.type',
        [dataStory.link.type],
        dataStory.link.type,
        requiredGroupId
      );
      const name = select('icon.name', iconsList, null, optionalGroupId);
      if (name !== null) {
        prepareIcon(name, dataStory);
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
      dataStory.link.label = text(
        'link.label',
        'Call to action link',
        requiredGroupId
      );
      const name = select('icon.name', iconsList, null, optionalGroupId);
      if (name !== null) {
        prepareIcon(name, dataStory);
      }

      return link(dataStory);
    },
    {
      notes: { markdown: notes, json: dataCta },
    }
  );
