import React from 'react';

import { storiesOf } from '@storybook/react';
import { Pill } from '../../components/Pill/Pill';
import { previewText } from './preview-variables';

const stories = storiesOf('Pill', module);

stories.add('Promotion Pill', () => (
  <React.Fragment>
    <Pill
      circular={true}
      size="small"
      text={previewText}
    >
    </Pill>
  </React.Fragment>
));

export default stories;
