import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox, Container, Dropdown, Form, Icon, Input, Label, Search, TextArea } from 'semantic-ui-react';

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
        <Form.Field required>
          <label>Search</label>
          <Search
            placeholder="Placeholder"
            results={[
              { key: '1', title: 'Title1', description: 'Description1' },
              { key: '2', title: 'Title2', description: 'Description2' },
              { key: '3', title: 'Title3', description: 'Description3' },
              { key: '4', title: 'Title4', description: 'Description4' },
              { key: '5', title: 'Title5', description: 'Description5' }
            ]}
          />
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
            <label>Multiple labeled input</label>
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
              >
            </Search>
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
  .add('Loading', () =>
    <Container fluid>
      <Form loading>
        <Form.Field required>
          <label>Text</label>
          <Input placeholder="Placeholder" />
        </Form.Field>
        <Form.Field required>
          <label>Search</label>
          <Search
            placeholder="Placeholder"
            results={[
              { key: '1', title: 'Title1', description: 'Description1' },
              { key: '2', title: 'Title2', description: 'Description2' },
              { key: '3', title: 'Title3', description: 'Description3' },
              { key: '4', title: 'Title4', description: 'Description4' },
              { key: '5', title: 'Title5', description: 'Description5' }
            ]}
          />
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
            <label>Multiple labeled input</label>
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
              >
            </Search>
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
          <Input placeholder="Placeholder" />
          <Label basic color="red"><Icon className="universe-exclamation" />This field is required</Label>
        </Form.Field>
        <Form.Field required error>
          <label>Search</label>
          <Search
            placeholder="Placeholder"
            results={[
              { key: '1', title: 'Title1', description: 'Description1' },
              { key: '2', title: 'Title2', description: 'Description2' },
              { key: '3', title: 'Title3', description: 'Description3' },
              { key: '4', title: 'Title4', description: 'Description4' },
              { key: '5', title: 'Title5', description: 'Description5' }
            ]}
          />
          <Label basic color="red"><Icon className="universe-exclamation" />This field is required</Label>
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
            <label>Multiple labeled input</label>
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
              >
            </Search>
            <Label basic color="red"><Icon className="universe-exclamation" />This field is required</Label>
          </Form.Field>
        </Form.Group>
        <Form.Field error>
          <label>Dropdown</label>
          <Dropdown placeholder='Placeholder' selection options={options} onChange={action('changed')} />
          <Label basic color="red"><Icon className="universe-exclamation" />This field is required</Label>
        </Form.Field>
        <Form.Field error>
          <label>Multiple Dropdown</label>
          <Dropdown placeholder='Placeholder' multiple search selection options={options} onChange={action('changed')} />
          <Label basic color="red"><Icon className="universe-exclamation" />This field is required</Label>
        </Form.Field>
        <Form.Field error>
          <label>TextArea</label>
          <TextArea label="TextArea" placeholder="Placeholder" />
          <Label basic color="red"><Icon className="universe-exclamation" />This field is required</Label>
        </Form.Field>
        <Form.Field error>
          <Checkbox label="I agree to the Terms and Conditions" />
          <Label basic color="red"><Icon className="universe-exclamation" />This field is required</Label>
        </Form.Field>
      </Form>
    </Container>
  );

export default stories;
