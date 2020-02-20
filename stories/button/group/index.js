import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import { Button, Container, Icon } from 'semantic-ui-react';

const stories = storiesOf('Button/Group', module);

class StateButton extends Component {
  constructor(props) {
    super(props);
    this.state = { public: true };
  }

  render() {
    return (
      <Button.Group>
        <Button
          primary={this.state.public}
          inverted={this.state.public}
          onClick={() => { this.setState({ public: true }) }}
        >
          Public
        </Button>
        <Button
          primary={!this.state.public}
          inverted={!this.state.public}
          onClick={() => { this.setState({ public: false }) }}
        >
          Unlisted
        </Button>
      </Button.Group>
    );
  }
}

stories
  .add('Default', () =>
    <Container fluid>
      <StateButton />
    </Container>
  );

export default stories;
