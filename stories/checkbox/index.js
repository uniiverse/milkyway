import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Checkbox, Form } from 'semantic-ui-react';

const stories = storiesOf('Checkbox', module)
  .add('Default', () =>
    <Container fluid>
      <p><Checkbox label="Unchecked" /></p>
      <p><Checkbox label="Checked" checked /></p>
      <p><Checkbox label="Disabled" disabled /></p>
      <p><Checkbox label="Indeterminate" indeterminate /></p>
      <p>
        <Form>
          <Form.Field error>
            <Checkbox label="Error unchecked" />
          </Form.Field>
        </Form>
      </p>
      <p>
        <Form>
          <Form.Field error>
            <Checkbox label="Error checked" checked />
          </Form.Field>
        </Form>
      </p>
    </Container>
  )
  .add('Toggle', () =>
    <Container fluid>
      <p><Checkbox toggle label="Toggle" /></p>
      <p><Checkbox toggle checked={false} disabled label="Unchecked disabled" /></p>
      <p><Checkbox toggle checked={true} disabled label="Checked disabled" /></p>
    </Container>
  );

export default stories;
