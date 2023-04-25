/*Hooks de React*/
import { useState } from "react";
/* React Router Dom */
import { NavLink } from "react-router-dom";

/* Imagen */
import imageNotFound from "../../assets/image_not_found.jpg";

/* Componentes Estilizados */
import {
  StyledDiv,
  StyledDivImage,
  StyledImage,
  StyledH2,
  StyledP,
  StyledButton,
} from "./Card-styles";

const Card = ({ id, title, image, diets, healthScore }) => {
  const [imageSrc, setImageSrc] = useState(image);

  const handleChangeImage = () => {
    setImageSrc(imageNotFound);
  };

  return (
    <StyledDiv>
      <StyledH2>{title}</StyledH2>
      <StyledDivImage>
        <StyledImage src={imageSrc} onError={handleChangeImage} alt={title} />
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
        <StyledButton>View More Info</StyledButton>
      </NavLink>
    </StyledDiv>
  );
};

export default Card;
