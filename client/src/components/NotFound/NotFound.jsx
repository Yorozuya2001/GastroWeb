import plato from "../../assets/plato.png";
import { StyledDiv, StyledImg, StyledP } from "./NotFound-styles";

const NotFound = ({ message }) => {
  return (
    <StyledDiv>
      <StyledP>{message}</StyledP>
      <StyledImg src={plato} alt="plato" />
    </StyledDiv>
  );
};

export default NotFound;
