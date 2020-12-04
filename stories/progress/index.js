import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Progress } from 'semantic-ui-react';

const stories = storiesOf('Progress', module)
  .add('Default', () =>
    <Container fluid>
      <Progress success percent={25} />
    </Container>
  ).add('Sized', () =>
  <Container>
    <Progress fluid percent={10} size='tiny'>tiny</Progress>
    <Progress fluid percent={20} size='small'>small</Progress>
    <Progress fluid percent={35} size='medium'>medium</Progress>
    <Progress fluid percent={60} size='large'>large</Progress>
    <Progress fluid percent={90} size='big'>big</Progress>
  </Container>
  );

export default stories;
