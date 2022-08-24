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
  const { title, priceText, description } = props;

  return (
    <>
      <Container className={styles.container}>
        <Image
          className={styles.bannerImage}
          src={props.imageUrl}
        />

        <div className={styles.containerBody}>
          <Header
            as='h3'
            className={styles.title}>
            {title}
          </Header>
          <p className={styles.priceDifference}>{priceText}</p>
          <p className={styles.description}>{description}</p>

          <div className={styles.listContainer}>
            <List>
              <p className={styles.listDescription}>{'⭐️ You will get:'}</p>

              <ul className={styles.listItems}>
                {props.upgradeOptions.map((option, i) => (<li key={i}>{option}</li>))}
              </ul>
            </List>
          </div>

          <Button primary className={styles.upgradeButton}>
            {props.buttonText}
          </Button>
        </div>
      </Container>
    </>
  );
};
