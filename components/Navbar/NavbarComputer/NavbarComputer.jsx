
import React from 'react';
import { Menu, Dropdown, Image, Responsive } from 'semantic-ui-react';
import { EventSearcher } from '../EventSearcher';
import Logo from '../../../assets/universe.svg';
import styles from './NavbarComputer.module.css';

export const NavbarComputer = ({ user, sticky, minWidth }) => (
  <Responsive minWidth={minWidth}>
    <Menu className={styles.menu}>
      <Menu.Menu position="left">
        <UniverseHome />
        <EventSearcher />
      </Menu.Menu>
      <Menu.Menu position="right">
        <Help loggedIn={!!user} />
        <FindEvents />
        <CreateOrHostEvent isHost={user && user.is_host} />
        <LoginAndSignUp loggedIn={!!user} />
        <Account user={user} />
      </Menu.Menu>
    </Menu>
  </Responsive>
);

// private components
const CreateOrHostEvent = ({ isHost }) => {
  if (isHost) return <Menu.Item href='/create'>Create Events</Menu.Item>
  return (
    <Dropdown item pointing text='Host Events'>
      <Dropdown.Menu>
        <Dropdown.Item href="/create">Create Event</Dropdown.Item>
        <Dropdown.Divider className={styles.divider} />
        <Dropdown.Item href="/features">Features</Dropdown.Item>
        <Dropdown.Item href="/customers">Customers</Dropdown.Item>
        <Dropdown.Item href="/pricing">Pricing</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const LoginAndSignUp = ({ loggedIn }) => {
  if (loggedIn) return null;
  return (
    <React.Fragment>
      <Menu.Item href={`/sign-in?redirectTo=${window.location.href}`}>Log In</Menu.Item>
      <Menu.Item href={`/users/sign_up?redirectTo=${window.location.href}`}>Sign Up</Menu.Item>
    </React.Fragment>
  );
};

const FindEvents = () => <Menu.Item href="/explore">Find Events</Menu.Item>;

const Help = ({ loggedIn }) => {
  if (loggedIn) return null;
  return (
    <Dropdown item pointing text='Help'>
      <Dropdown.Menu>
        <Dropdown.Item href="/help">Help Center</Dropdown.Item>
        <Dropdown.Divider className={styles.divider} />
        <Dropdown.Item href="/help/find_tickets">Where are my tickets?</Dropdown.Item>
        <Dropdown.Item href="/help/contact_organizer">Contact the event organizer</Dropdown.Item>
        <Dropdown.Item href="/help/get_refund">Can I get a refund?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Account = ({ user }) => {
  if (!user) return null;

  const trigger = (
    <span>
      <Image avatar src="https://picsum.photos/seed/picsum/50/50" verticalAlign='middle' />
      {user.name}
    </span>
  );

  return (
    <React.Fragment>
      <Dropdown item pointing trigger={trigger}>
        <Dropdown.Menu>
        <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
          <Dropdown.Item href="/dashboard/tickets">Your tickets</Dropdown.Item>
          <Dropdown.Divider className={styles.divider}/>
          <Dropdown.Item href={`/users/${user.slug || user.id || ''}`}>Profile</Dropdown.Item>
          <Dropdown.Item href="/dashboard/conversations">Messages</Dropdown.Item>
          <Dropdown.Item href="/dashboard/settings">Settings</Dropdown.Item>
          <Dropdown.Item href="/help">Help</Dropdown.Item>
          <Dropdown.Item href="/users/sign_out">Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
};

const UniverseHome = () => <Menu.Item href="/"><Logo /></Menu.Item>;
