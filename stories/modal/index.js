import React from 'react';

import { storiesOf } from '@storybook/react';

import { Container, Modal, Button } from 'semantic-ui-react';

const stories = storiesOf('Modal', module)
  .add('Default', () =>
    <Container fluid>
      <Modal
        centered
        open
        size="tiny"
        closeIcon
      >
        <Modal.Header>
          Schedule event
        </Modal.Header>
        <Modal.Content>
          Select a future time for your event to go live. Until then the event will remain in a draft state.
        </Modal.Content>
        <Modal.Actions>
            <Button
              default
            >
              Cancel
            </Button>
            <Button
              primary
              default
            >
              Confirm
            </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );

export default stories;
