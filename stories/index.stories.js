import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Container, Icon } from 'semantic-ui-react';

import '../semantic.min.css';

storiesOf('Button', module)
  .add('Primary', () =>
    <Container fluid>
      <p><Button primary onClick={action('primary click')}>Primary</Button></p>
      <p><Button primary disabled onClick={action('primary cannot click')}>Primary</Button></p>
      <p><Button primary loading onClick={action('primary loading click')}>Primary</Button></p>
      <p>
        <Button primary onClick={action('primary icon click')}>
          <Icon name='plus' />
          Primary
        </Button>
      </p>
    </Container>
  )
  .add('Inverted', () =>
    <Container fluid>
      <p><Button primary inverted onClick={action('inverted click')}>Primary</Button></p>
      <p><Button primary inverted disabled onClick={action('inverted cannot click')}>Primary</Button></p>
      <p><Button primary inverted loading onClick={action('inverted loading click')}>Primary</Button></p>
      <p>
        <Button primary inverted onClick={action('inverted icon click')}>
          <Icon name='plus' />
          Primary
        </Button>
      </p>
    </Container>
  )
  .add('Secondary', () =>
    <Container fluid>
      <p><Button secondary onClick={action('secondary click')}>Secondary</Button></p>
      <p><Button secondary disabled onClick={action('secondary cannot click')}>Secondary</Button></p>
      <p><Button secondary loading onClick={action('secondary loading click')}>Secondary</Button></p>
      <p>
        <Button secondary onClick={action('secondary icon click')}>
          <Icon name='plus' />
          Secondary
          </Button>
      </p>
    </Container>
  )
  .add('Default', () =>
  <Container fluid>
    <p><Button onClick={action('default click')}>Default</Button></p>
    <p><Button disabled onClick={action('default cannot click')}>Default</Button></p>
    <p><Button loading onClick={action('default loading click')}>Default</Button></p>
    <p>
      <Button onClick={action('default icon click')}>
        <Icon name='plus' />
        Default
      </Button>
    </p>
  </Container>
);
