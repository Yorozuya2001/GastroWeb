import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { StyledDiv } from "./Cards-styles";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Loader from "../Loader/Loader";

const Cards = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    if (!recipes.length) dispatch(getRecipes());
  }, [recipes]);
  return (
    <StyledDiv>
      {recipes[0] ? (
        recipes.map(({ id, title, image, diets, healthScore }) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              image={image}
              diets={diets}
              healthScore={healthScore}
            />
          );
        })
      ) : (
        <Loader />
      )}
    </StyledDiv>
  );
};

export default Cards;
