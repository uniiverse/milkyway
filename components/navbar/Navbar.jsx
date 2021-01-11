import React from 'react';

import { NavbarComputer } from './NavbarComputer';
import { NavbarTabletMobile } from './NavbarTabletMobile';
import { breakpoints } from '../../lib/breakpoints';

export const Navbar = (props) => (
  <>
    <NavbarComputer {...props} minWidth={breakpoints.computer} />
    <NavbarTabletMobile {...props} maxWidth={breakpoints.largestTablet} />
  </>
);
