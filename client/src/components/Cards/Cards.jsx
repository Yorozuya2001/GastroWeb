import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { StyledDiv } from "./Cards-styles";

const Cards = () => {
  const [recipes, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((data) => setData([...data]));
  }, []);
  return (
    <StyledDiv>
      {recipes[0] &&
        recipes.map(({ id, title, image, diets }) => {
          return <Card key={id} title={title} image={image} diets={diets} />;
        })}
    </StyledDiv>
  );
};

export default Cards;
