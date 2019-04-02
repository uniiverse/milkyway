import React from 'react';

import { storiesOf } from '@storybook/react';

import { Container, Loader } from 'semantic-ui-react';

const stories = storiesOf('Loader', module)
  .add('Default', () =>
    <Container fluid>
      <Loader active />
    </Container>
  )
  .add('Inverted', () =>
    <Container fluid>
      <Loader inverted active />
    </Container>
  );


export default stories;
