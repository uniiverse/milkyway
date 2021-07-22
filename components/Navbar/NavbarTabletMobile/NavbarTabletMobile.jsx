import React, { useState } from 'react';
import Logo from '../../../assets/universe.svg';
import { Responsive, Menu, Icon, Button } from 'semantic-ui-react';
import { MenuTabletMobile } from './MenuTabletMobile';

import styles from './NavbarTabletMobile.module.less';
export const NavbarTabletMobile = ({ children, user, sticky, maxWidth }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const hideMenus = () => {
    if (menuVisible) {
      setMenuVisible(false);
    }
    if (sidebarVisible) {
      setSidebarVisible(false);
    }
  };
  return (
    <Responsive maxWidth={maxWidth}>
      <Menu widths={3} className={styles.navbar} id={styles.navbar}>
        <Menu.Item>
          <Button
            className={styles.button + ' ' + styles.sidebarClosedPadding}
            content={<Icon className={'universe-sidebar-closed'} size="big" />}
            onClick={() => setSidebarVisible(!sidebarVisible)}
          ></Button>
        </Menu.Item>
        <Menu.Item>
          <Logo />
        </Menu.Item>
        <Menu.Item>
          <Button
            className={styles.button + ' ' + styles.largerHamburger}
            content={<Icon className="universe-hamburger-menu" size="big" />}
            onClick={() => setMenuVisible(!menuVisible)}
          ></Button>
        </Menu.Item>
      </Menu>
      <MenuTabletMobile visible={menuVisible} user={user} />
      <div className={sidebarVisible ? styles.sidebar + ' ' + styles.slideInSidebar : styles.sidebar}>{children}</div>
      <div
        onClick={() => hideMenus()}
        className={sidebarVisible || menuVisible ? styles.overlay + ' ' + styles.open : styles.overlay}
      >
        <div className={styles.closeIcon}>
          <Icon className={sidebarVisible ? 'universe-close' : ''}></Icon>
          <Icon className={menuVisible ? 'universe-close' : ''}></Icon>
        </div>
      </div>
    </Responsive>
  );
};
