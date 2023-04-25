/* Componentes estilizados */
import { NavStyle, StyledNavLink, NavHeader } from "./Nav-styles";

const Nav = () => {
  return (
    <NavHeader>
      <NavStyle mobile>
        <StyledNavLink mobile to="/home" activeclassname="active">
          Home
        </StyledNavLink>
        <StyledNavLink mobile to="/recipecreator" activeclassname="active">
          Create you recipe
        </StyledNavLink>
        <StyledNavLink mobile to="/about" activeclassname="active">
          About Us
        </StyledNavLink>
      </NavStyle>
    </NavHeader>
  );
};

export default Nav;
