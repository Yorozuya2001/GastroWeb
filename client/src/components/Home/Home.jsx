import SearchBar from "../SearchBar/SearchBar";
import { StyledDiv } from "./Home-styles";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <StyledDiv>
      <SearchBar />
      <Cards />
    </StyledDiv>
  );
};

export default Home;
