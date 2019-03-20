import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Icon, Input, Label } from 'semantic-ui-react';

const stories = storiesOf('Input', module)
  .add('Default', () =>
    <Container fluid>
      <p><Input placeholder="Placeholder" /></p>
      <p><Input type="password" placeholder="Password" /></p>
      <p><Input placeholder="Placeholder" disabled /></p>
      <p><Input placeholder="Placeholder" error /></p>
      <p><Input placeholder="Placeholder" icon={<Icon className="universe-search" color="grey" />} /></p>
      <p><Input placeholder="Placeholder" iconPosition="left" icon={<Icon className="universe-geolocation-2" color="blue" />} /></p>
      <p>
        <Input
          placeholder="Placeholder"
          label="EST"
          labelPosition="right"
        />
      </p>
      <p>
        <Input
          placeholder="Placeholder"
          label={<Label basic>EUR</Label>}
          labelPosition="right"
        />
      </p>
      <p>
        <Input
          placeholder="Placeholder"
          label="EST"
          labelPosition="left"
        />
      </p>
      <p>
        <Input
          placeholder="Placeholder"
          label={<Label basic>EUR</Label>}
          labelPosition="left"
        />
      </p>
    </Container>
  );

export default stories;
