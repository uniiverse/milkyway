import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Icon, Input, Label, Search } from 'semantic-ui-react';

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
      <p>
        <Search
          input={
            <Input labelPosition="right" placeholder="Select time">
              <Label basic icon={<Icon style={{ margin: 0 }} color="grey" className="universe-time"/>} />
              <input />
              <Label>EST</Label>
            </Input>
          }
          results={[
            { key: '1', title: 'Title1', description: 'Description1' },
            { key: '2', title: 'Title2', description: 'Description2' },
            { key: '3', title: 'Title3', description: 'Description3' },
            { key: '4', title: 'Title4', description: 'Description4' },
            { key: '5', title: 'Title5', description: 'Description5' }
          ]}
        />
      </p>
    </Container>
  );

export default stories;
