import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button, Card, Container, Grid, Header, Image, Segment } from 'semantic-ui-react';

import graph from './graph.svg';

const stories = storiesOf('Segment', module)
  .add('Placeholder', () =>
    <Container fluid>
      <Grid stackable>
      <Grid.Column width={3} />
      <Grid.Column width={6}>
        <Card fluid>
          <Card.Content>
            <Segment placeholder>
              <Header image textAlign='center'>
                <Image src={graph} />
                <Header.Subheader>
                  A timeline of all your event net sales will show here once an event is published.
                </Header.Subheader>
              </Header>
              <Button primary>Publish an Event</Button>
            </Segment>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column width={3} />
      </Grid>
    </Container>
  );
export default stories;
