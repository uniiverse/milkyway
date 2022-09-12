import React from 'react';

import { storiesOf } from '@storybook/react';
import { array, text } from '@storybook/addon-knobs';
import { List } from 'semantic-ui-react';
import styles from '../../components/Pamphlet/Pamphlet.less';
import { Pamphlet } from '../../components/Pamphlet/Pamphlet';
import { title, subtitle, description, imageUrl, upgradeOptions, buttonText } from './preview-variables';

const stories = storiesOf('Pamphlet', module);

const alertClick = () => {
  alert('clicked')
}

stories.add('Rate Upgrades', () => (
  <React.Fragment>
    <Pamphlet
      title={text('Title', title)}
      subtitle={text('Subtitle', subtitle)}
      description={text('Description', description)}
      imageUrl={text('image URL', imageUrl)}
      buttonText={text('Button text', buttonText)}
      handleClick={alertClick}
    >
      <List>
        <p className={styles.listDescription}>{'⭐️ You will get:'}</p>
        <ul className={styles.listItems}>
          {array('Upgrade options', upgradeOptions).map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </List>
    </Pamphlet>
  </React.Fragment>
));

export default stories;
