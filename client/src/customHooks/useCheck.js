import { useState } from "react";

const useCheck = (name, myRecipe, setMyRecipe) => {
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

  return [capitalizeName, isChecked, handleCheckboxChange];
};
export default useCheck;
