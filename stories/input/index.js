import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Input } from 'semantic-ui-react';

const stories = storiesOf('Input', module)
  .add('Default', () =>
    <Container fluid>
      <p><Input placeholder="Placeholder" /></p>
      <p><Input type="password" placeholder="Password" /></p>
      <p><Input placeholder="Placeholder" disabled /></p>
      <p><Input placeholder="Placeholder" error /></p>
    </Container>
  );

export default stories;
