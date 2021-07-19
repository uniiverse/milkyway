import React, { useState } from 'react';
import Logo from '../../../assets/universe.svg';
import { Responsive, Menu, Icon, Button } from 'semantic-ui-react';
import styles from '../NavbarComputer/NavbarComputer.module.less';

export const NavbarTabletMobile = (props, { user, sticky, maxWidth }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Responsive maxWidth={maxWidth}>
      <Menu widths={3} className={styles.menu}>
        <Menu.Item>
          <Button
            className={styles.button}
            content={
              visible ? (
                <Icon className="universe-chevron-right" size="big" />
              ) : (
                <Icon className="universe-chevron-left" size="big" />
              )
            }
            onClick={() => setVisible(!visible)}
          ></Button>
        </Menu.Item>
        <Menu.Item>
          <Logo />
        </Menu.Item>
        <Menu.Item>
          <Icon className="universe-basic-information" size="big" />
        </Menu.Item>
      </Menu>
      <div className={visible ? styles.sidebarOverlay : ''} />
      <div className={visible ? styles.sidebar + ' ' + styles.slideInLeft : styles.sidebar}>{props.children}</div>
    </Responsive>
  );
};
