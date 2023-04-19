import React from "react";
import { useState } from "react";
import {
  StyledCheckbox,
  StyledLabelInCheck,
  StyledDivContainsCheck,
} from "./RecipeCreator-styles";

const DietsCheckbox = ({ name, myRecipe, setMyRecipe }) => {
  const [isChecked, setIsChecked] = useState(false);
  let capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);

    if (!isChecked) {
      setMyRecipe({
        ...myRecipe,
        diets: [...myRecipe.diets, name],
      });
    } else {
      setMyRecipe({
        ...myRecipe,
        diets: myRecipe.diets.filter((diet) => diet !== name),
      });
    }
  };

  return (
    <StyledDivContainsCheck>
      <StyledCheckbox
        type="checkbox"
        name="preferencias"
        value={name}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <StyledLabelInCheck>{capitalizeName}</StyledLabelInCheck>
    </StyledDivContainsCheck>
  );
};

export default DietsCheckbox;
