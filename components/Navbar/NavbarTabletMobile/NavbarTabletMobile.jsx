
import React from 'react';
import Logo from '../../../assets/universe.svg';
import { Responsive, Menu, Icon } from 'semantic-ui-react';

export const NavbarTabletMobile = ({ user, sticky, maxWidth }) => (
  <Responsive maxWidth={maxWidth}>
    <Menu widths={3}>
      <Menu.Item>
        <Icon className="universe-search" size="big" />
      </Menu.Item>
      <Menu.Item>
        <Logo />
      </Menu.Item>
      <Menu.Item>
        <Icon className="universe-basic-information" size="big" />
      </Menu.Item>
    </Menu>
  </Responsive>
);


