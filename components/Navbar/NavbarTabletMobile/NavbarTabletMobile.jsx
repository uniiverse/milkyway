import React, { useState } from 'react';
import Logo from '../../../assets/universe.svg';
import { Responsive, Menu, Icon, Button } from 'semantic-ui-react';
import styles from '../NavbarComputer/NavbarComputer.module.less';

export const NavbarTabletMobile = (props, { user, sticky, maxWidth }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <Responsive maxWidth={maxWidth}>
      <Menu widths={3} className={styles.menu} id={styles.navbar}>
        <Menu.Item>
          <Button
            className={styles.button}
            content={
              <Icon
                className={
                  sidebarVisible ? styles.flipIcon + ' ' + 'universe-sidebar-closed' : 'universe-sidebar-closed'
                }
                size="big"
              />
            }
            onClick={() => setSidebarVisible(!sidebarVisible)}
          ></Button>
        </Menu.Item>
        <Menu.Item>
          <Logo />
        </Menu.Item>
        <Menu.Item>
          <Button
            className={styles.button}
            content={<Icon className="universe-hamburger-menu" size="big" />}
            onClick={() => setVisible(!visible)}
          ></Button>
        </Menu.Item>
      </Menu>
      <div className={sidebarVisible ? styles.sidebarOverlay : ''} />
      <div className={sidebarVisible ? styles.sidebar + ' ' + styles.slideInLeft : styles.sidebar}>
        {props.children}
      </div>
    </Responsive>
  );
};
