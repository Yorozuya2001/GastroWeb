/* Componentes de React */
import Cards from "../Cards/Cards";
import CardsForm from "../CardsForm/CardsForm";

/* Componentes estilizados */
import { StyledDiv } from "./Home-styles";

const Home = () => {
  return (
    <StyledDiv>
      <CardsForm />
      <Cards />
    </StyledDiv>
  );
};

export default Home;
