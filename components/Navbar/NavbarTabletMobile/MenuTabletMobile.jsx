import React from 'react';
import { Menu } from 'semantic-ui-react';
import styles from './NavbarTabletMobile.module.less';
import Logo from '../../../assets/universe.svg';

export const MenuTabletMobile = ({ visible, user }) => {
  return (
    <>
      <HostMenu isHost={user && user.is_host} visible={visible} user={user} />
      <LoggedOutMenu />
    </>
  );
};

const HostMenu = ({ isHost, visible, user }) => {
  if (!isHost) return null;

  return (
    <Menu
      borderless
      vertical
      id={styles.menu}
      position="right"
      className={visible ? styles.menu + ' ' + styles.slideInRight : styles.menu}
    >
      <UniverseHome />
      <Menu.Item href="/dashboard">Dashboard</Menu.Item>
      <Menu.Item href="/dashboard/my-events">My Events</Menu.Item>
      <Menu.Item className={styles.menuBorder} href="/dashboard/tickets">
        My Tickets
      </Menu.Item>
      <Menu.Item className={styles.menuBorder} href="/explore">
        Find Events
      </Menu.Item>
      <Menu.Item href="/create">Create Event</Menu.Item>
      <Menu.Item className={styles.menuBorder + ' ' + styles.bottom} href={`/users/${user.slug || user.id || ''}`}>
        Profile
      </Menu.Item>
      <Menu.Item href="/dashboard/conversations">Messages</Menu.Item>
      <Menu.Item href="/dashboard/settings">Settings</Menu.Item>
      <Menu.Item href="/help">Help</Menu.Item>
      <Menu.Item href="/users/sign_out">Log Out</Menu.Item>
    </Menu>
  );
};

const LoggedOutMenu = ({ user }) => {
  if (!user) return null;

  return (
    <Menu
      borderless
      vertical
      id={styles.menu}
      position="right"
      className={visible ? styles.menu + ' ' + styles.slideInRight : styles.menu}
    >
      <UniverseHome />
      <Menu.Item href="/explore">Find Events</Menu.Item>
      <Menu.Item href="/create">Create Event</Menu.Item>
      <Menu.Item href="/features">Features</Menu.Item>
      <Menu.Item href="/customers">Customers</Menu.Item>
      <Menu.Item href="/pricing">Pricing</Menu.Item>
      <Menu.Item className={styles.menuBorder + ' ' + styles.bottom} href="/help">
        Help
      </Menu.Item>
      <Menu.Item href="/sign-in?redirectTo=https://www.universe.com/">Login</Menu.Item>
      <Menu.Item href="/sign-up">Sign Up</Menu.Item>
    </Menu>
  );
};
const UniverseHome = () => (
  <Menu.Item href="/">
    <Logo className={styles.universeLogo} />
  </Menu.Item>
);
