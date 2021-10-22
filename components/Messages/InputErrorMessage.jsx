import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './InputErrorMessage.module.less';

export const InputErrorMessage = ({ content, visible }) => {
  if (!visible) return null;
  return (
    <div className={styles.flex}>
      <div>
        <Icon className="universe-exclamation" color="coral"/>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};
