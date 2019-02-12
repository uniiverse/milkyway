import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Icon, Step } from 'semantic-ui-react';

import inactiveOne from '../../semantic/src/themes/universe/assets/1_inactive.svg';
import activeTwo from '../../semantic/src/themes/universe/assets/2_active.svg';
import inactiveThree from '../../semantic/src/themes/universe/assets/3_inactive.svg';
import inactiveFour from '../../semantic/src/themes/universe/assets/4_inactive.svg';

const stories = storiesOf('Step', module)
  .add('Default', () =>
    <Container fluid>
      <Step.Group fluid>
        <Step completed onClick={action('step clicked')}>
          <img src={inactiveOne} className="icon" />
          <Step.Content>
            <Step.Title>BASICS</Step.Title>
          </Step.Content>
        </Step>
        <Step onClick={action('step clicked')} active>
          <img src={activeTwo} className="icon" />
          <Step.Content>
            <Step.Title>WHEN AND WHERE</Step.Title>
          </Step.Content>
        </Step>
        <Step onClick={action('step clicked')}>
          <img src={inactiveThree} className="icon" />
          <Step.Content>
            <Step.Title>TICKETS</Step.Title>
          </Step.Content>
        </Step>
        <Step onClick={action('step clicked')}>
          <img src={inactiveFour} className="icon" />
          <Step.Content>
            <Step.Title>CUSTOMIZE</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </Container>
  );

export default stories;
