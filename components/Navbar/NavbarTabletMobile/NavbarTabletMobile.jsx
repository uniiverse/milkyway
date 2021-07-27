import React, { useState } from 'react';
import { Responsive, Menu, Icon, Button } from 'semantic-ui-react';
import { MenuTabletMobile } from './MenuTabletMobile';

import Logo from '../../../assets/universe.svg';
import { classNames } from '../../../utilities/css';
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
            className={classNames(styles.button, styles.sidebarClosedPadding)}
            content={<Icon className={'universe-sidebar-closed'} size="big" />}
            onClick={() => setSidebarVisible(!sidebarVisible)}
          ></Button>
        </Menu.Item>
        <Menu.Item href="/">
          <Logo />
        </Menu.Item>
        <Menu.Item>
          <Button
            className={classNames(styles.button, styles.largerHamburger)}
            content={<Icon className="universe-hamburger-menu" size="big" />}
            onClick={() => setMenuVisible(!menuVisible)}
          ></Button>
        </Menu.Item>
      </Menu>
      <MenuTabletMobile visible={menuVisible} user={user} />
      <div className={classNames(styles.sidebar, sidebarVisible ? styles.slideInSidebar : '')}>{children}</div>
      <div
        onClick={() => hideMenus()}
        className={classNames(styles.overlay, sidebarVisible || menuVisible ? styles.open : '')}
      >
        <div className={styles.closeIcon}>
          <Icon className={sidebarVisible ? 'universe-close' : ''}></Icon>
          <Icon className={menuVisible ? 'universe-close' : ''}></Icon>
        </div>
      </div>
    </Responsive>
  );
};
