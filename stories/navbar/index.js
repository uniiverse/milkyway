import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Container } from 'semantic-ui-react';
import { Navbar } from '../../components/Navbar';

const NavbarWrapper = ({ children, host }) => {
  const [user, setUser] = useState({ name: 'Some Guy', is_host: host || false });
  const [sticky, setSticky] = useState(false);

  return (
    <Container fluid>
      { children({ user, sticky }) }
    </Container>
  );
}

const stories = storiesOf('Navbar', module)
  .add('Logged in, user', () =>
    <NavbarWrapper>
      {
        ({ user, sticky }) => <Navbar user={user} sticky={sticky} />
      }
    </NavbarWrapper>
  )
  .add('Logged in, host', () =>
    <NavbarWrapper host={true}>
      {
        ({ user, sticky }) => <Navbar user={user} sticky={sticky} />
      }
    </NavbarWrapper>
  )
  .add('Logged in, admin', () =>
    <NavbarWrapper>
      {
        ({ user, sticky }) => <Navbar user={user} sticky={sticky} />
      }
    </NavbarWrapper>
  )
  .add('Logged out', () =>
    <NavbarWrapper>
      {
        ({ sticky }) => <Navbar user={null} sticky={sticky} />
      }
    </NavbarWrapper>
  )

export default stories;
