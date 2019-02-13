import React, { Component } from 'react';
import './App.css';

import { Button, Card, Checkbox, Container, Dropdown, Form, Grid, Input } from 'semantic-ui-react';

import 'milkyway/semantic.min.css';

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

class App extends Component {
  render() {
    return (
      <div className="App">
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
                            <label>Text</label>
                            <Input placeholder="Placeholder" />
                          </Form.Field>
                          <Form.Field>
                            <label>Dropdown</label>
                            <Dropdown placeholder='Placeholder' selection options={options} onChange={console.log('changed')} />
                          </Form.Field>
                        </Form.Group>
                        <Form.Field>
                          <label>Multiple Dropdown</label>
                          <Dropdown placeholder='Placeholder' multiple selection options={options} onChange={console.log('changed')} />
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
      </div>
    );
  }
}

export default App;
