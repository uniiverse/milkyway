import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Header } from 'semantic-ui-react';

const stories = storiesOf('Header', module)
  .add('Default', () =>
    <Container fluid>
      <Header as="h1">Connecting the world through unforgettable experiences</Header>
      <Header as="h2">Connecting the world through unforgettable experiences</Header>
      <Header as="h3">Connecting the world through unforgettable experiences</Header>
      <Header as="h4">Connecting the world through unforgettable experiences</Header>
      <Header as="h5">Connecting the world through unforgettable experiences</Header>
      <Header as="h6">Connecting the world through unforgettable experiences</Header>
    </Container>
  ).add('Subheader', () =>
    <Container fluid>
      <Header
        as="h1"
        content="Orders & Attendees"
        subheader={`This panel allows you to manage the settings for both the ticket purchaser and attendees.
        View, edit and delete orders or add additional guests.
        You can also send mass messages to the entire group or contact individuals directly.`}
      />
    </Container>
  );

export default stories;
