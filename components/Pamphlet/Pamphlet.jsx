import React from 'react';
import { Button, Container, Header, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import styles from './Pamphlet.less';

export const Pamphlet = props => {
  const { title, subtitle, description, imageUrl, children, buttonText } = props;

  return (
    <>
      <Container className={styles.container}>
        <Image className={styles.bannerImage} src={imageUrl} />

        <div className={styles.containerBody}>
          <Header as="h3" className={styles.title}>
            {title}
          </Header>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.description}>{description}</p>

          <div className={styles.container}>{children}</div>

          <Button primary className={styles.button}>
            {buttonText}
          </Button>
        </div>
      </Container>
    </>
  );
};

Pamphlet.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
