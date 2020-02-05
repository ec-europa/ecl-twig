/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import merge from 'deepmerge';
import pageHeaderDataTitle from './demo/data--title';
import pageHeaderDataTitleDescription from './demo/data--title-description';
import pageHeaderDataMetaTitle from './demo/data--meta-title';
import pageHeaderDataMetaTitleDescription from './demo/data--meta-title-description';
import pageHeaderDataEvents from './demo/data--events';
import pageHeaderDataEventsDescription from './demo/data--events-description';

import pageHeader from './ecl-page-header.html.twig';
import notes from './README.md';

const pageHeaderDataEventsInfo = [];
const pageHeaderDataEventsDescriptioninfo = [];

pageHeaderDataEvents.infos.forEach((item, key) => {
  pageHeaderDataEventsInfo.push(pageHeaderDataEvents.infos[key].text);
  pageHeaderDataEvents.infos[key].text = '';
});

pageHeaderDataEventsDescription.infos.forEach((item, key) => {
  pageHeaderDataEventsDescriptioninfo.push(
    pageHeaderDataEventsDescription.infos[key].text
  );
  pageHeaderDataEventsDescription.infos[key].text = '';
});

storiesOf('Components/deprecated/Page Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'ECL < 2.14 title',
    () =>
      pageHeader(
        merge(pageHeaderDataTitle, {
          title: text('Title', pageHeaderDataTitle.title),
          breadcrumb: {
            icon_file_path: defaultSprite,
          },
        })
      ),
    {
      notes: {
        markdown: notes,
        json: pageHeaderDataTitle,
      },
    }
  )
  .add(
    'ECL < 2.14 title-description',
    () =>
      pageHeader(
        merge(pageHeaderDataTitleDescription, {
          title: text('Title', pageHeaderDataTitleDescription.title),
          description: text(
            'Description',
            pageHeaderDataTitleDescription.description
          ),
          breadcrumb: {
            icon_file_path: defaultSprite,
          },
        })
      ),
    {
      notes: {
        markdown: notes,
        json: pageHeaderDataTitleDescription,
      },
    }
  )
  .add(
    'ECL < 2.14 meta-title',
    () =>
      pageHeader(
        merge(pageHeaderDataMetaTitle, {
          title: text('Title', pageHeaderDataMetaTitle.title),
          meta: text('Meta', pageHeaderDataMetaTitle.meta),
          breadcrumb: {
            icon_file_path: defaultSprite,
          },
        })
      ),
    {
      notes: {
        markdown: notes,
        json: pageHeaderDataMetaTitle,
      },
    }
  )
  .add(
    'ECL < 2.14 meta-title-description',
    () =>
      pageHeader(
        merge(pageHeaderDataMetaTitleDescription, {
          title: text('Title', pageHeaderDataMetaTitleDescription.title),
          meta: text('Meta', pageHeaderDataMetaTitleDescription.meta),
          description: text(
            'Description',
            pageHeaderDataMetaTitleDescription.description
          ),
          breadcrumb: {
            icon_file_path: defaultSprite,
          },
        })
      ),
    {
      notes: {
        markdown: notes,
        json: pageHeaderDataMetaTitleDescription,
      },
    }
  )
  .add(
    'ECL < 2.14 events',
    () =>
      pageHeader(
        merge(pageHeaderDataEvents, {
          title: text('Title', pageHeaderDataEvents.title),
          meta: text('Meta', pageHeaderDataEvents.meta),
          breadcrumb: {
            icon_file_path: defaultSprite,
          },
          infos: [
            {
              icon: {
                path: defaultSprite,
                type: pageHeaderDataEvents.infos[0].icon.type,
                name: pageHeaderDataEvents.infos[0].icon.name,
              },
              text: text('Info 0 text', pageHeaderDataEventsInfo[0]),
            },
            {
              icon: {
                path: defaultSprite,
                type: pageHeaderDataEvents.infos[1].icon.type,
                name: pageHeaderDataEvents.infos[1].icon.name,
              },
              text: text('Info 1 text', pageHeaderDataEventsInfo[1]),
            },
            {
              icon: {
                path: defaultSprite,
                type: pageHeaderDataEvents.infos[2].icon.type,
                name: pageHeaderDataEvents.infos[2].icon.name,
              },
              text: text('Info 2 text', pageHeaderDataEventsInfo[2]),
            },
          ],
        })
      ),
    {
      notes: {
        markdown: notes,
        json: pageHeaderDataEvents,
      },
    }
  )
  .add(
    'ECL < 2.14 events-description',
    () =>
      pageHeader(
        merge(pageHeaderDataEventsDescription, {
          title: text('Title', pageHeaderDataEventsDescription.title),
          meta: text('Meta', pageHeaderDataEventsDescription.meta),
          description: text(
            'Description',
            pageHeaderDataMetaTitleDescription.description
          ),
          breadcrumb: {
            icon_file_path: defaultSprite,
          },
          infos: [
            {
              icon: {
                path: defaultSprite,
                type: pageHeaderDataEventsDescription.infos[0].icon.type,
                name: pageHeaderDataEventsDescription.infos[0].icon.name,
              },
              text: text('Info 0 text', pageHeaderDataEventsDescriptioninfo[0]),
            },
            {
              icon: {
                path: defaultSprite,
                type: pageHeaderDataEventsDescription.infos[1].icon.type,
                name: pageHeaderDataEventsDescription.infos[1].icon.name,
              },
              text: text('Info 1 text', pageHeaderDataEventsDescriptioninfo[1]),
            },
            {
              icon: {
                path: defaultSprite,
                type: pageHeaderDataEventsDescription.infos[2].icon.type,
                name: pageHeaderDataEventsDescription.infos[2].icon.name,
              },
              text: text('Info 2 text', pageHeaderDataEventsDescriptioninfo[2]),
            },
          ],
        })
      ),
    {
      notes: {
        markdown: notes,
        json: pageHeaderDataEventsDescription,
      },
    }
  );
