import React from 'react';
import {
  Button,
  Container,
  Header,
  Image,
  List
 } from 'semantic-ui-react';

import styles from './Pamphlet.less';

export const Pamphlet = (props) => {
  const { header, price, description } = props;

  return (
    <div>
      <Container className={styles.container}>
        <Image 
          className={styles.bannerImage}
          src={props.imageUrl}
        />

        <Container className={styles.containerBody}>
          <Header
            as="h3"
            className={styles.header}>
              {header}
          </Header>
          <p className={styles.priceDifference}>{`Only $${price}.00 extra per ticket`}</p>
          <p className={styles.description}>{description}</p>

          <div className={styles.listContainer}>
            <List>
              <p className={styles.listDescription}>{"⭐️ You will get:"}</p>

              <ul className={styles.listItems}>
                {props.upgradeOptions.map((option, i) => (<li key={i}>{option}</li>))}
              </ul>
            </List>
          </div>

          <Button primary className={styles.upgradeButton}>
            {props.buttonText}
          </Button>
        </Container>
      </Container>
    </div>
  );
};
