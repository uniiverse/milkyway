import React from 'react';
import { Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import styles from './Pill.less';

export const Pill = props => {
  const { circular, size, text } = props;

  return (
    <div className="label-container">
      <Label
        className={styles.pill}
        circular={circular}
        size={size}
      >

        {text}
      </Label>
    </div>
  );
};

Pill.propTypes = {
  circular: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
