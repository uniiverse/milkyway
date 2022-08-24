import React from 'react';

import { storiesOf } from '@storybook/react';
import { array, text } from "@storybook/addon-knobs";

import { Pamphlet } from '../../components/Pamphlet/Pamphlet';
import {
  title,
  priceText,
  description,
  imageUrl,
  upgradeOptions,
  buttonText
} from './preview-variables';

const stories = storiesOf('Pamphlet', module);

stories
  .add('Rate Upgrades', () => (
    <React.Fragment>
      <Pamphlet
        title={text("Title", title)}
        price={priceText}
        description={text("Description", description)}
        upgradeOptions={array("Upgrade options", upgradeOptions)}
        imageUrl={text("image URL", imageUrl)}
        buttonText={buttonText}
      />
    </React.Fragment>
  ))

export default stories;
