import React from "react";

const FilterBar = () => {
  return (
    <>
      <div>
        <select name="" id="">
          <option value="">A - Z</option>
          <option value="">Z - A</option>
          <option value="">Lowest health score first</option>
          <option value="">Highest health score first</option>
        </select>
        <select name="" id="">
          <option value="">All Recipes</option>
          <option value="">My Recipes</option>
        </select>
      </div>
      <div>
        <legend htmlFor="">Select types of diets:</legend>
        <label>
          <input type="checkbox" name="preferencias" value="gluten_free" />
          Gluten free
        </label>

        <label>
          <input type="checkbox" name="preferencias" value="dairy_free" />
          Dairy free
        </label>

        <label>
          <input
            type="checkbox"
            name="preferencias"
            value="lacto_ovo_vegetarian"
          />
          Lacto ovo vegetarian
        </label>

        <label>
          <input type="checkbox" name="preferencias" value="vegan" />
          Vegan
        </label>
      </div>
    </>
  );
};

export default FilterBar;
