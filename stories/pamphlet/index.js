import React from 'react';

import { storiesOf } from '@storybook/react';
import { array, text } from "@storybook/addon-knobs";

import { Pamphlet } from '../../components/Pamphlet/Pamphlet';

const stories = storiesOf('Pamphlet', module);

const header = "VIP ticket upgrade - Best experience"
const price = 40.00
const description = "🎉 Enhance your experience at the event!"
const imageUrl = "https://www.tastingtable.com/img/gallery/11-cocktails-to-try-if-you-like-drinking-gin/intro-1640186734.webp"
const upgradeOptions = [
  "Priority access",
  "Flexibility to arrive +/- 1hr of your time",
  "Limited edition poster",
  "greet and meetLimited edition cushion",
  "VIP souvenir laminate",
  "Priority access",
  "Flexibility to arrive +/- 1hr of your time",
  "Free available T-shirt while products last",
  "Special seating"
]
const buttonText = "UPGRADE ALL TICKETS"

stories
  .add('Rate Upgrades', () => (
    <React.Fragment>
      <Pamphlet
        header={text("Header", header)}
        price={price}
        description={text("Description", description)}
        upgradeOptions={array("Upgrade options", upgradeOptions)}
        imageUrl={text("image URL", imageUrl)}
        buttonText={buttonText}
      />
    </React.Fragment>
  ))

export default stories;
