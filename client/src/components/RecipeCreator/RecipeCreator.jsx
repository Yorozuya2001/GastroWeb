import React from "react";
import DietsCheckbox from "../FilterBar/DietsCheckbox";
import { useSelector } from "react-redux";
const RecipeCreator = () => {
  const diets = useSelector((state) => state.diets);
  console.log(diets);

  const handleSubmit = () => {};

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="name">Summary</label>
        <input type="text" name="summary" />
      </div>
      <div>
        <label htmlFor="name">Health Score</label>
        <input type="text" name="health_score" />
      </div>
      <div>
        <label htmlFor="name">Steps</label>
        <input type="text" name="analyzed_Instructions" />
      </div>

      <div>
        <label htmlFor="name">Image</label>
        <input type="text" name="image" />
      </div>
      <div>
        {diets?.map((diet) => {
          return <DietsCheckbox key={diet.id} name={diet.name} />;
        })}
      </div>
      <button type="submit">Create recipe</button>
    </form>
  );
};

export default RecipeCreator;
