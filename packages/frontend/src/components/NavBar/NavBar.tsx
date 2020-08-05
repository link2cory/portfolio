import React from "react";
import { NavBarProps } from "./interfaces";

import StyledNavBar from "./NavBar.styles";

const NavBar: React.FC<NavBarProps> = ({}: NavBarProps) => <StyledNavBar />;

export default NavBar;
