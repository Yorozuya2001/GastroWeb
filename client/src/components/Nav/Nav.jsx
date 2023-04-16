import React from "react";
import { NavStyle, StyledNavLink, NavHeader } from "./Nav-styles";

const Nav = () => {
  return (
    <NavHeader phone>
      <NavStyle>
        <StyledNavLink to="/home" activeclassname="active">
          Home
        </StyledNavLink>
        <StyledNavLink to="/recipecreator" activeclassname="active">
          Create you recipe
        </StyledNavLink>
        <StyledNavLink to="/about" activeclassname="active">
          About Us
        </StyledNavLink>
      </NavStyle>
    </NavHeader>
  );
};

export default Nav;
