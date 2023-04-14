import React from "react";
import { StyledDiv, StyledDivImage, StyledImage } from "./Card-styles";

const Card = ({ title, image, diets }) => {
  return (
    <StyledDiv>
      <h2>{title}</h2>
      <StyledDivImage>
        <StyledImage src={image} alt={title} />
      </StyledDivImage>
      <ul>
        {diets?.map((diet) => {
          return <li>{diet}</li>;
        })}
      </ul>
    </StyledDiv>
  );
};

export default Card;
