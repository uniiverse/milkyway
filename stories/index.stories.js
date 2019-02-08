import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Container, Dropdown, Header, Icon } from 'semantic-ui-react';

import '../semantic.min.css';

storiesOf('Button', module)
  .add('Primary', () =>
    <Container fluid>
      <p><Button primary onClick={action('primary click')}>Default</Button></p>
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
  .add('Tertiary', () =>
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
  )
  .add('Primary inverted', () =>
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
  );

storiesOf('Dropdown', module)
  .add('Base', () =>
    <Dropdown placeholder='Select' selection options={[
      {
        text: 'Option 1',
        value: 1
      },
      {
        text: 'Option 2',
        value: 2
      },
      {
        text: 'Option 3',
        value: 3,
        disabled: true
      },
      {
        text: 'Option 4',
        value: 4
      },
    ]} onChange={action('changed')} />
  )
  .add('Images', () =>
    <Dropdown placeholder='Select' selection options={[
      {
        text: 'Option 1',
        value: 1,
        image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg'
      },
      {
        text: 'Option 2',
        value: 2,
        image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
      },
      {
        text: 'Option 3',
        value: 3,
        disabled: true,
        image: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg'
      },
      {
        text: 'Option 4',
        value: 4,
        image: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg'
      },
    ]} onChange={action('changed')} />
  );

storiesOf('Header', module)
  .add('Default', () =>
    <Container fluid>
      <Header as="h1">Connecting the world through unforgettable experiences</Header>
      <Header as="h2">Connecting the world through unforgettable experiences</Header>
      <Header as="h3">Connecting the world through unforgettable experiences</Header>
      <Header as="h4">Connecting the world through unforgettable experiences</Header>
      <Header as="h5">Connecting the world through unforgettable experiences</Header>
      <Header as="h6">Connecting the world through unforgettable experiences</Header>
    </Container>
  );
