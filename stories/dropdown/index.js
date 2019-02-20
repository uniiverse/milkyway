import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Dropdown } from 'semantic-ui-react';

const options = [
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
];

const imageOptions = [
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
];

const avatarOptions = [
  {
    text: 'Option 1',
    value: 1,
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
    },
  },
  {
    text: 'Option 2',
    value: 2,
    image: {
      src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      avatar: true,
    }
  },
  {
    text: 'Option 3',
    value: 3,
    disabled: true,
    image: {
      src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg',
      avatar: true,
    }
  },
  {
    text: 'Option 4',
    value: 4,
    image: {
      src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg',
      avatar: true,
    }
  },
];

const stories = storiesOf('Dropdown', module)
  .add('Base', () =>
    <Container>
      <p>
        <Dropdown selection placeholder="Select" options={options} onChange={action('changed')} />
      </p>
      <p>
        <Dropdown error placeholder='Select' selection options={options} onChange={action('changed')} />
      </p>
    </Container>

  )
  .add('Images', () =>
    <Container>
      <p>
        <Dropdown placeholder='Select' selection options={imageOptions} onChange={action('changed')} />
      </p>
      <p>
        <Dropdown placeholder='Select' selection options={imageOptions} onChange={action('changed')} error />
      </p>
    </Container>
  )
  .add('Avatar', () =>
    <Container>
      <p>
        <Dropdown placeholder='Select' selection options={avatarOptions} onChange={action('changed')} />
      </p>
      <p>
        <Dropdown placeholder='Select' selection options={avatarOptions} onChange={action('changed')} error />
      </p>
    </Container>
  )
  .add('Multiple', () =>
    <Container>
      <p>
        <Dropdown placeholder='Select' multiple selection options={imageOptions} onChange={action('changed')} />
      </p>
      <p>
        <Dropdown placeholder='Select' multiple selection options={imageOptions} onChange={action('changed')} error />
      </p>
    </Container>
  )
  .add('Search', () =>
    <Container>
      <p>
        <Dropdown placeholder='Select' multiple search selection options={imageOptions} onChange={action('changed')} />
      </p>
      <p>
        <Dropdown placeholder='Select' multiple search selection options={imageOptions} onChange={action('changed')} error />
      </p>
    </Container>
  );

export default stories;
