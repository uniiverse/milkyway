import React from 'react';

import { storiesOf } from '@storybook/react';

import { Container, Form, Icon, Input, Search } from 'semantic-ui-react';

import { action } from '@storybook/addon-actions';

const stories = storiesOf('Search', module)
  .add('Default', () =>
    <Container fluid>
      <Form>
        <Form.Field>
          <Search input={<Input icon={<Icon color="grey" className="universe-location" />} iconPosition="left" />} results={[
            { key: '1', title: 'Title1', description: 'Description1' },
            { key: '2', title: 'Title2', description: 'Description2' },
            { key: '3', title: 'Title3', description: 'Description3' },
            { key: '4', title: 'Title4', description: 'Description4' },
            { key: '5', title: 'Title5', description: 'Description5' }
          ]}
          onResultSelect={action('selected')}
          />
        </Form.Field>
      </Form>
    </Container>
  );

export default stories;
