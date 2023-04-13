import React from "react";

import { NavLink } from "react-router-dom";
import { StyledButton, StyledH1 } from "./LandingPage.-styles";

const LandingPage = () => {
  return (
    <div>
      <StyledH1>Bienvenido a GastroWeb</StyledH1>
      <NavLink>
        <StyledButton>¡Vayamos a cocinar!</StyledButton>
      </NavLink>
    </div>
  );
};

export default LandingPage;
