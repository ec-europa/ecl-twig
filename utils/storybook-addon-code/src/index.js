import addons, { makeDecorator } from '@storybook/addons';
import he from 'he';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    let code = '';
    if (typeof story === 'string') {
      code = he.decode(story);
    } else if (story instanceof DocumentFragment) {
      const htmlElement = document.createElement('div');
      code = story.cloneNode(true);
      const rootEl = code.firstChild;
      // Check whether we wrapped the story just for the demo.
      if (rootEl.hasAttribute('demo_only')) {
        const demoChildren = rootEl.childNodes;
        for (const [i, v] of demoChildren.entries()) {
          htmlElement.append(demoChildren[i]);
        }
      } else {
        htmlElement.append(code);
      }
      code = he.decode(htmlElement.innerHTML);
    } else if (story instanceof Node) {
      code = story.outerHTML;
    }

    channel.emit('ecl/code/add_code', code);

    return story;
  },
});

export default withCode;
