import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import message from './message.html.twig';
import notes from './docs/message.md';

import { dataError, dataInfo, dataSuccess, dataWarning } from './demo/data';

storiesOf('Components/Message', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'info',
    () => {
      const html = message(dataInfo);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var messageElement = document.querySelector("[data-ecl-message]");
      var message = new ECL.Message(messageElement);
      message.init();
      `;
      demo.append(scriptElement);

      return demo;
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'success',
    () => {
      const html = message(dataSuccess);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var messageElement = document.querySelector("[data-ecl-message]");
      var message = new ECL.Message(messageElement);
      message.init();
      `;
      demo.append(scriptElement);

      return demo;
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'warning',
    () => {
      const html = message(dataWarning);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var messageElement = document.querySelector("[data-ecl-message]");
      var message = new ECL.Message(messageElement);
      message.init();
      `;
      demo.append(scriptElement);

      return demo;
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'error',
    () => {
      const html = message(dataError);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var messageElement = document.querySelector("[data-ecl-message]");
      var message = new ECL.Message(messageElement);
      message.init();
      `;
      demo.append(scriptElement);

      return demo;
    },
    {
      notes: { markdown: notes },
    }
  );
