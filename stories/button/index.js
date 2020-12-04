import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from "@storybook/addon-knobs";
import { Button, Container, Icon, Header } from 'semantic-ui-react';

const stories = storiesOf('Button', module);

stories
  .add('Primary', () =>
    <Container text style={{ padding: "2rem" }}>
      <p>
        <Button
          primary
          disabled={boolean("disabled", false)}
          inverted={boolean("inverted", false)}
          loading={boolean("loading", false)}
          onClick={action('onClick')}
        >
          {text("label", "Default")}
        </Button>
      </p>

      <p>
        <Button
          primary
          disabled={boolean("disabled", false)}
          inverted={boolean("inverted", false)}
          loading={boolean("loading", false)}
          onClick={action('onClick')}
        >
          <Icon flipped="horizontally" className='universe-chevron-left' />
          {text("label", "Primary")} "with Icon"
        </Button>
      </p>
    </Container>
  )
  .add('Secondary', () =>
    <Container text style={{ padding: "2rem" }}>
      <p>
        <Button
          secondary
          disabled={boolean("disabled", false)}
          inverted={boolean("inverted", false)}
          loading={boolean("loading", false)}
          onClick={action('onClick')}
        >
          {text("label", "Secondary")}
        </Button>
      </p>

      <p>
        <Button
          secondary
          disabled={boolean("disabled", false)}
          inverted={boolean("inverted", false)}
          loading={boolean("loading", false)}
          onClick={action('onClick')}
        >
          <Icon flipped="horizontally" className='universe-chevron-left' />
          {text("label", "Secondary")} "with Icon"
        </Button>
      </p>
    </Container>
  )
  .add('Tertiary', () =>
    <Container text style={{ padding: "2rem" }}>
      <p>
        <Button
          tertiary
          disabled={boolean("disabled", false)}
          inverted={boolean("inverted", false)}
          loading={boolean("loading", false)}
          onClick={action('onClick')}
        >
          {text("label", "Tertiary")}
        </Button>
      </p>

      <p>
        <Button
          tertiary
          disabled={boolean("disabled", false)}
          inverted={boolean("inverted", false)}
          loading={boolean("loading", false)}
          onClick={action('onClick')}
        >
          <Icon flipped="horizontally" className='universe-chevron-left' />
          {text("label", "Tertiary")} "with Icon"
        </Button>
      </p>
    </Container>
  ).add('Basic with Icon', () =>
    <Container text style={{ padding: "2rem" }}>
       <p>
        <Button basic>
          {text("label", "Basic")}
        </Button>
      </p>
      <p>
        <Button basic>
          <Icon className="universe-mail" />
          {text("label", "Basic")} "with Icon"
        </Button>
      </p>
    </Container>
  )

export default stories;
