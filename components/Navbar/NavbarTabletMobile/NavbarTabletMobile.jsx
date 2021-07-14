import React from 'react';
import Logo from '../../../assets/universe.svg';
import { Responsive, Menu, Icon, Button } from 'semantic-ui-react';
import styles from '../NavbarComputer/NavbarComputer.module.less';

export const NavbarTabletMobile = ({ user, sticky, maxWidth, onClick, visible }) => {
  return (
    <Responsive maxWidth={maxWidth}>
      <Menu widths={3} className={styles.menu}>
        <Menu.Item>
          <Button
            className={styles.button}
            content={
              //<Icon className="universe-chevron-right" size="big" />
              visible ? (
                <Icon className="universe-chevron-right" size="big" />
              ) : (
                <Icon className="universe-chevron-left" size="big" />
              )
            }
            onClick={() => onClick()}
          ></Button>
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
};
