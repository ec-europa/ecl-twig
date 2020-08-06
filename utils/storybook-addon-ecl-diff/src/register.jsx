import React from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';

const CodePanel = styled.div({
  margin: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  fontSize: '1rem',
  display: 'flex',
});

const Pre = styled.pre({
  backgroundColor: '#272822',
  margin: '0 !important',
  paddingTop: '4rem !important',
  borderRadius: '0 !important',
  flexGrow: 1,
    color: '#f8f8f2',
});

class HTMLMarkup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };

    this.onAddHTMLMarkup = this.onAddHTMLMarkup.bind(this);

    this.codeRef = null;
    this.setCodeRef = element => {
      this.codeRef = element;
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { channel, api } = this.props;
    // Listen to the HTMLMarkup and render it.
    channel.on('ecl/ecl_diff/add_code', this.onAddHTMLMarkup);

    // Clear the current HTMLMarkup on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddHTMLMarkup('');
    });
  }

  // This is some cleanup tasks when the HTMLMarkup panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    // eslint-disable-next-line react/prop-types
    const { channel } = this.props;
    channel.removeListener('ecl/ecl_diff/add_code', this.onAddHTMLMarkup);
  }

  onAddHTMLMarkup(code) {
    this.setState({ code });
  }

  render() {
    const { code: rawCode } = this.state;
    // eslint-disable-next-line react/prop-types
    const { active } = this.props;

    let code = rawCode;
    return active ? (
      <CodePanel>
        <Pre>
          <code className="language-text" ref={this.setCodeRef}>
            {code}
          </code>
        </Pre>
      </CodePanel>
    ) : null;
  }
}

// Register the addon with a unique name.
addons.register('ecl/ecl_diff', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('ecl/ecl_diff/panel', {
    title: 'Ecl diff',
    // eslint-disable-next-line react/prop-types
    render: ({ active }) => (
      <HTMLMarkup channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
