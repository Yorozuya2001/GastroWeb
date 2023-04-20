import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledDiv,
  StyledDivImage,
  StyledImage,
  StyledH2,
  StyledP,
  StyledButton,
} from "./Card-styles";

const Card = ({ id, title, image, diets, healthScore }) => {
  return (
    <StyledDiv>
      <StyledH2>{title}</StyledH2>
      <StyledDivImage>
        <StyledImage src={image} alt={title} />
      </StyledDivImage>
      <StyledP>
        Diets:
        <br />
        {diets}
      </StyledP>
      <StyledP>
        Health Score:
        <br />
        {healthScore}
      </StyledP>
      <NavLink to={`/detail/${id}`}>
        {" "}
        <StyledButton>View More Info</StyledButton>
      </NavLink>
    </StyledDiv>
  );
};

export default Card;
