import React from 'react';

import { storiesOf } from '@storybook/react';
import { Pill } from '../../components/Pill/Pill';

const stories = storiesOf('Pill', module);

stories.add('Promotional Custom Classes Selected', () => (
  <React.Fragment>
    <Pill
      circular={true}
      size="large"
      text="Selling Fast!"
      customClass="promotional"
    >
    </Pill>

    <br />

    <Pill
      circular={true}
      size="medium"
      text="Red Alert! Beep boop"
      customClass="red-alert"
    >
    </Pill>
  </React.Fragment>
));

stories.add('Pill Sizes', () => (
  <React.Fragment>
    <Pill
      circular={true}
      size="small"
      text="small pill"
      color="yellow"
    >
    </Pill>

    <br />

    <Pill
      circular={true}
      size="medium"
      text="Medium Pill"
      color="blue"
    >
    </Pill>

    <br />

    <Pill
      circular={true}
      size="large"
      text="LARGE PILL"
      color="green"
    >
    </Pill>
  </React.Fragment>
));



export default stories;
