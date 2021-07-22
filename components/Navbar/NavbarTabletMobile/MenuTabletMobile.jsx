import React from 'react';
import { Menu } from 'semantic-ui-react';
import { injectIntl, IntlProvider } from 'react-intl';

import styles from './NavbarTabletMobile.module.less';
import Logo from '../../../assets/universe.svg';
import { classNames } from '../../../utilities/css';
import locale from './locale';

export const MenuTabletMobile = ({ visible, user }) => {
  return (
    <IntlProvider locale="en">
      <HostMenu isHost={user && user.is_host} visible={visible} user={user} />
      <LoggedOutMenu user={user} visible={visible} />
    </IntlProvider>
  );
};

const HostMenu = injectIntl(({ intl: { formatMessage }, isHost, visible, user }) => {
  if (!isHost) return null;

  return (
    <Menu
      borderless
      vertical
      id={styles.menu}
      position="right"
      className={classNames(styles.menu, visible ? styles.slideInRight : '')}
    >
      <UniverseHome />
      <Menu.Item href="/dashboard">{formatMessage(locale.dashboard)}</Menu.Item>
      <Menu.Item href="/dashboard/my-events">{formatMessage(locale.myEvents)}</Menu.Item>
      <Menu.Item className={styles.menuBorder} href="/dashboard/tickets">
        {formatMessage(locale.myTickets)}
      </Menu.Item>
      <Menu.Item className={styles.menuBorder} href="/explore">
        {formatMessage(locale.findEvents)}
      </Menu.Item>
      <Menu.Item href="/create">{formatMessage(locale.createEvent)}</Menu.Item>
      <Menu.Item className={classNames(styles.menuBorder, styles.bottom)} href={`/users/${user.slug || user.id || ''}`}>
        {formatMessage(locale.profile)}
      </Menu.Item>
      <Menu.Item href="/dashboard/conversations">{formatMessage(locale.messages)}</Menu.Item>
      <Menu.Item href="/dashboard/settings">{formatMessage(locale.settings)}</Menu.Item>
      <Menu.Item href="/help">{formatMessage(locale.help)}</Menu.Item>
      <Menu.Item href="/users/sign_out">{formatMessage(locale.logout)}</Menu.Item>
    </Menu>
  );
});

const LoggedOutMenu = injectIntl(({ intl: { formatMessage }, user, visible }) => {
  if (user) return null;

  return (
    <Menu
      borderless
      vertical
      id={styles.menu}
      position="right"
      className={classNames(styles.menu, visible ? styles.slideInRight : '')}
    >
      <UniverseHome />
      <Menu.Item href="/explore"> {formatMessage(locale.findEvents)}</Menu.Item>
      <Menu.Item href="/create"> {formatMessage(locale.createEvent)}</Menu.Item>
      <Menu.Item href="/features"> {formatMessage(locale.features)}</Menu.Item>
      <Menu.Item href="/customers"> {formatMessage(locale.customers)}</Menu.Item>
      <Menu.Item href="/pricing"> {formatMessage(locale.pricing)}</Menu.Item>
      <Menu.Item className={classNames(styles.menuBorder, styles.bottom)} href="/help">
        {formatMessage(locale.help)}
      </Menu.Item>
      <Menu.Item href="/sign-in?redirectTo=https://www.universe.com/">{formatMessage(locale.signin)}</Menu.Item>
      <Menu.Item href="/sign-up">{formatMessage(locale.signup)}</Menu.Item>
    </Menu>
  );
});
const UniverseHome = () => (
  <Menu.Item href="/">
    <Logo className={styles.universeLogo} />
  </Menu.Item>
);
