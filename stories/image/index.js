import React from 'react';

import { storiesOf } from '@storybook/react';

import { Card, Container, Grid, Header, Image } from 'semantic-ui-react';

const stories = storiesOf('Image', module)
  .add('Default', () =>
    <Container>
      <Grid>
        <Grid.Row columns={12}>
          <Grid.Column width={2} />
          <Grid.Column width={8}>
            <Card fluid>
              <p>
                <div>Default:</div>
                <Image height={100} width={100} src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </p>
              <p>
                <div>Rounded:</div>
                <Image rounded height={100} width={100} src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </p>
              <p>
                <div>Circular:</div>
                <Image circular height={100} width={100} src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </p>
              <p>
                <div>Fluid:</div>
                <Image fluid height={100} width={100} src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </p>
            </Card>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    </Container>
  );

export default stories;
