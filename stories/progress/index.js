import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Progress } from 'semantic-ui-react';

const stories = storiesOf('Progress', module)
  .add('Default', () =>
    <Container fluid>
      <Progress success percent={25} />
    </Container>
  );

export default stories;
