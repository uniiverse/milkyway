import React from 'react';

import { storiesOf } from '@storybook/react';
import { Pill } from '../../components/Pill/Pill';

const stories = storiesOf('Pill', module);

stories.add('Promotion Pill', () => (
  <React.Fragment>
    <Pill
      circular={true}
      size="small"
      text="selling fast!"
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
    >
    </Pill>

    <br />

    <Pill
      circular={true}
      size="medium"
      text="Medium Pill"
    >
    </Pill>

    <br />

    <Pill
      circular={true}
      size="large"
      text="LARGE PILL"
    >
    </Pill>
  </React.Fragment>
));



export default stories;
