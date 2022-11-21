import React from 'react';
import { Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import styles from './Pill.less';

export const Pill = props => {
  const { circular, color, customClass, size, text } = props;

  return (
    <div className="label-container">
      <Label
        className={`${styles.pill} ${styles[`${customClass}`]}`}
        circular={circular}
        color={color}
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
