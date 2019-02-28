import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Card, Checkbox, Container, Dropdown, Form, Grid, Icon, Input } from 'semantic-ui-react';

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

const stories = storiesOf('Card', module)
  .add('Default', () =>
    <Container fluid>
      <Grid stackable>
      <Grid.Column width={3} />
      <Grid.Column width={6}>
        <Card fluid>
          <Card.Content>
            <Card.Header>Advanced ticketing</Card.Header>
            <p>Set up your events to success with additional settings to help you tailor to your event's needs.</p>
            <p className="ui right floated"><Button primary>Primary</Button></p>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column width={3} />
      </Grid>
    </Container>
  )
  .add('Form', () =>
    <Container fluid>
      <Grid stackable>
        <Grid.Row columns={12}>
          <Grid.Column width={3} />
          <Grid.Column width={6}>
            <Card fluid>
              <Card.Content>
                <Card.Header>Advanced ticketing</Card.Header>
                <p>Set up your events to success with additional settings to help you tailor to your event's needs.</p>
                <Card.Content>
                  <Form>
                    <Form.Group widths={2}>
                      <Form.Field required>
                        <label>Input group</label>
                        <div className="ui fluid inputs">
                          <Input icon={<Icon color="grey" className="universe-search" />} />
                          <Input />
                          <Input />
                        </div>
                      </Form.Field>
                      <Form.Field>
                        <label>Input</label>
                        <Input placeholder="Input" />
                      </Form.Field>
                    </Form.Group>
                    <Form.Group widths={2}>
                      <Form.Field>
                        <label>Input</label>
                        <Input placeholder="Input" />
                      </Form.Field>
                      <Form.Field>
                        <label>Input</label>
                        <Input placeholder="Input" />
                      </Form.Field>
                    </Form.Group>
                    <Form.Field>
                      <label>Input</label>
                      <Input placeholder="Large input" />
                    </Form.Field>
                    <Form.Field>
                      <label>Multiple Dropdown</label>
                      <Dropdown placeholder='Placeholder' multiple selection options={options} onChange={action('changed')} />
                    </Form.Field>
                    <Form.Field>
                      <a>+ Add something else</a>
                    </Form.Field>
                    <Form.Field label="TextArea" placeholder="Placeholder" control="textarea" />
                    <Form.Field>
                      <Checkbox label="I agree to the Terms and Conditions" />
                    </Form.Field>
                    <Form.Field>
                      <Button primary className="right floated">Submit</Button>
                      <Button default className="right floated">Cancel</Button>
                    </Form.Field>
                  </Form>
                </Card.Content>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>
      </Grid>
    </Container>
  );

export default stories;
