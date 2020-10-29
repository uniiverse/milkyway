import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Radio, Form } from 'semantic-ui-react';

const stories = storiesOf('Radio', module)
  .add('Default', () =>
    <Container fluid>
      <p><Radio label="Unchecked" /></p>
      <p><Radio label="Checked" checked /></p>
      <p><Radio label="Disabled" disabled /></p>
    </Container>
  )
  .add('Toggle', () =>
    <Container fluid>
      <p><Radio toggle label="Toggle" /></p>
      <p><Radio toggle checked={false} disabled label="Unchecked disabled" /></p>
      <p><Radio toggle checked={true} disabled label="Checked disabled" /></p>
    </Container>
  );

export default stories;
