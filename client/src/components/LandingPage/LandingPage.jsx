/* NavLink para enrutado */
import { NavLink } from "react-router-dom";

/* Componentes Estilizados */
import { StyledButton, StyledH1, StyledDiv } from "./LandingPage.-styles";

const LandingPage = () => {
  return (
    <StyledDiv>
      <StyledH1 tablet>Welcome to GastroWeb</StyledH1>
      <NavLink to="/home">
        <StyledButton>Start looking for recipes</StyledButton>
      </NavLink>
    </StyledDiv>
  );
};

export default LandingPage;
