import React from "react";
import {
  StyledDiv,
  StyledDivImage,
  StyledImage,
  StyledH2,
  StyledP,
} from "./Card-styles";

const Card = ({ title, image, diets, healthScore }) => {
  return (
    <StyledDiv>
      <StyledH2>{title}</StyledH2>
      <StyledDivImage>
        <StyledImage src={image} alt={title} />
      </StyledDivImage>
      <StyledP>
        Diets:
        <br />
        {diets.join(", ")}
      </StyledP>
      <StyledP>
        Health Score:
        <br />
        {healthScore}
      </StyledP>
    </StyledDiv>
  );
};

export default Card;
