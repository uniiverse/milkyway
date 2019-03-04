import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox, Container, Dropdown, Form, Icon, Input, Search } from 'semantic-ui-react';

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

const stories = storiesOf('Form', module)
  .add('Default', () =>
    <Container fluid>
      <Form>
        <Form.Field required>
          <label>Text</label>
          <Input placeholder="Placeholder" />
        </Form.Field>
        <Form.Group widths={2}>
          <Form.Field>
            <label>Input group</label>
            <div className="ui fluid inputs">
              <Input placeholder="Placeholder" />
              <Dropdown selection search placeholder="Placeholder" options={options} />
              <Search
                error
                placeholder="Search element"
                input={
                  <Input fluid iconPosition="left" icon={<Icon color="grey" className="universe-search" />} />
                }
                results={[
                  { key: '1', title: 'Title1' },
                  { key: '2', title: 'Title2' },
                  { key: '3', title: 'Title3' },
                  { key: '4', title: 'Title4' },
                  { key: '5', title: 'Title5' }
                ]}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Dropdown</label>
            <Dropdown selection options={options} />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Dropdown</label>
          <Dropdown placeholder='Placeholder' selection options={options} onChange={action('changed')} />
        </Form.Field>
        <Form.Field>
          <label>Multiple Dropdown</label>
          <Dropdown placeholder='Placeholder' multiple selection options={options} onChange={action('changed')} />
        </Form.Field>
        <Form.Field label="TextArea" placeholder="Placeholder" control="textarea" />
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
      </Form>
    </Container>
  )
  .add('Error', () =>
    <Container fluid>
      <Form>
        <Form.Field required error>
          <label>Text</label>
          <Form.Input placeholder="Placeholder" />
        </Form.Field>
        <Form.Group widths={2}>
          <Form.Field error>
            <label>Input group</label>
            <div className="ui fluid inputs">
              <Input placeholder="Placeholder" />
              <Dropdown selection search placeholder="Placeholder" options={options} />
              <Search
                placeholder="Search element"
                input={
                  <Input fluid iconPosition="left" icon={<Icon color="grey" className="universe-search" />} />
                }
                results={[
                  { key: '1', title: 'Title1' },
                  { key: '2', title: 'Title2' },
                  { key: '3', title: 'Title3' },
                  { key: '4', title: 'Title4' },
                  { key: '5', title: 'Title5' }
                ]}
              />
            </div>
          </Form.Field>
          <Form.Field error>
            <label>Dropdown</label>
            <Dropdown selection options={options} />
          </Form.Field>
        </Form.Group>
        <Form.Field error>
          <label>Dropdown</label>
          <Dropdown placeholder='Placeholder' selection options={options} onChange={action('changed')} />
        </Form.Field>
        <Form.Field error>
          <label>Multiple Dropdown</label>
          <Dropdown placeholder='Placeholder' multiple search selection options={options} onChange={action('changed')} />
        </Form.Field>
        <Form.Field label="TextArea" placeholder="Placeholder" control="textarea" error />
        <Form.Field error>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
      </Form>
    </Container>
  );

export default stories;
