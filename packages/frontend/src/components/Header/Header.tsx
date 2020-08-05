import React from "react";

import NavBar from "../NavBar";

import { HeaderProps } from "./interfaces";
import StyledHeader from "./Header.styles";

const Header: React.FC<HeaderProps> = ({ logo, links }: HeaderProps) => (
  <StyledHeader>
    <NavBar logo={logo} links={links} />
  </StyledHeader>
);

export default Header;
