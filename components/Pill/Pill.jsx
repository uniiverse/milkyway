import React from 'react';
import { Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { classNames } from '../../utilities/css';

import styles from './Pill.less';

export const Pill = props => {
  const { circular, color, customClass, size, text } = props;

  return (
    <div className="label-container">
      <Label
        className={classNames(styles.pill, styles[`${customClass}`])}
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
  text: PropTypes.string.isRequired,
  circular: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string
};
