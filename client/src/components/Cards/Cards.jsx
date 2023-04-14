import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { StyledDiv } from "./Cards-styles";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <StyledDiv>
      {recipes[0] &&
        recipes.map(({ id, title, image, diets, healthScore }) => {
          return (
            <Card
              key={id}
              title={title}
              image={image}
              diets={diets}
              healthScore={healthScore}
            />
          );
        })}
    </StyledDiv>
  );
};

export default Cards;
