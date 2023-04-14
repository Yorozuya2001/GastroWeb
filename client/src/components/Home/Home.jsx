import SearchBar from "../SearchBar/SearchBar";
import { StyledDiv } from "./Home-styles";
import Cards from "../Cards/Cards";
import CardsForm from "../CardsForm/CardsForm";

const Home = () => {
  return (
    <StyledDiv>
      <CardsForm />
      <Cards />
    </StyledDiv>
  );
};

export default Home;
