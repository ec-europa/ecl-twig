import addons, { makeDecorator } from '@storybook/addons';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    let code = '';
    if (typeof story === 'string') {
      code = story;
    } else if (story instanceof DocumentFragment) {
      const htmlElement = document.createElement('div');
      htmlElement.append(story.cloneNode(true));
      code = htmlElement.innerHTML;
    } else if (story instanceof Node) {
      code = story.outerHTML;
    }

    channel.emit('ecl/code/add_code', code);

    return story;
  },
});

export default withCode;
