import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Icon, Step } from 'semantic-ui-react';

const stories = storiesOf('Step', module)
  .add('Default', () =>
    <Container fluid>
      <Step.Group fluid>
        <Step completed onClick={action('step clicked')}>
          <Icon className="universe-checkmark" />
          <Step.Content>
            <Step.Title>BASICS</Step.Title>
          </Step.Content>
        </Step>
        <Step onClick={action('step clicked')} active>
          <Icon className="universe-2" />
          <Step.Content>
            <Step.Title>WHEN AND WHERE</Step.Title>
          </Step.Content>
        </Step>
        <Step onClick={action('step clicked')}>
          <Icon className="universe-3" />
          <Step.Content>
            <Step.Title>TICKETS</Step.Title>
          </Step.Content>
        </Step>
        <Step onClick={action('step clicked')}>
          <Icon className="universe-4" />
          <Step.Content>
            <Step.Title>CUSTOMIZE</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </Container>
  );

export default stories;
