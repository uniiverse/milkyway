import React from 'react';

import { storiesOf } from '@storybook/react';

import { Container, Icon, Message } from 'semantic-ui-react';

class DismissibleMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  handleDismiss() {
    this.setState({ visible: false });
    setTimeout(() => this.setState({ visible: true }), 2000);
  }

  render() {
    if(this.state.visible) {
      const children = React.Children.map(this.props.children, (child, index) => {
        return React.cloneElement(child, {
          onDismiss: () => this.handleDismiss()
        });
      });

      return children;
    }

    return <div>Coming back in 2 seconds</div>;
  }
}

const stories = storiesOf('Message', module)
  .add('Default', () =>
    <React.Fragment>
      <Container fluid>
        <Message icon info>
          <Icon className="universe-exclamation" />
          <Message.Content>
            <p><b>Info message</b></p>
          </Message.Content>
        </Message>
      </Container>
      <div style={{ height: '20px' }} />
      <Container fluid>
        <Message error icon>
          <Icon className="universe-error" />
          <Message.Content>
            <p><b>Error message</b></p>
          </Message.Content>
        </Message>
      </Container>
      <div style={{ height: '20px' }} />
      <Container fluid>
        <Message success icon>
          <Icon className="universe-checkmark" />
          <Message.Content>
            <p><b>Success message</b></p>
          </Message.Content>
        </Message>
      </Container>
      <div style={{ height: '20px' }} />
      <Container fluid>
        <Message warning icon>
          <Icon className="universe-exclamation" />
          <Message.Content>
            <p><b>Warning message</b></p>
          </Message.Content>
        </Message>
      </Container>
    </React.Fragment>
  )
  .add('Dismissible', () =>
    <React.Fragment>
      <Container fluid>
        <DismissibleMessage>
          <Message info icon>
            <Icon className="universe-exclamation" />
            <Message.Content>
              <p><b>Info message</b></p>
            </Message.Content>
          </Message>
        </DismissibleMessage>
      </Container>
      <div style={{ height: '20px' }} />
      <Container fluid>
        <DismissibleMessage>
          <Message error icon>
            <Icon className="universe-error" />
            <Message.Content>
              <p><b>Error message</b></p>
            </Message.Content>
          </Message>
        </DismissibleMessage>
      </Container>
      <div style={{ height: '20px' }} />
      <Container fluid>
      <DismissibleMessage>
        <Message success icon>
          <Icon className="universe-checkmark" />
          <Message.Content>
            <p><b>Success message</b></p>
          </Message.Content>
        </Message>
      </DismissibleMessage>
      </Container>
      <div style={{ height: '20px' }} />
      <Container fluid>
        <DismissibleMessage>
          <Message warning icon>
            <Icon className="universe-exclamation" />
            <Message.Content>
              <p><b>Warning message</b></p>
            </Message.Content>
          </Message>
        </DismissibleMessage>
      </Container>
    </React.Fragment>
  );

export default stories;
