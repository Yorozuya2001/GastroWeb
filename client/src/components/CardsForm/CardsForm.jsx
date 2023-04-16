import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { orderBy, searchRecipes } from "../../redux/actions";
import { getDiets } from "../../redux/actions";

const CardsForm = () => {
  const [recipe, setRecipe] = useState("");
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const handleChange = (event) => {
    setRecipe(event.target.value);
  };

  const handleChangeOrder = (event) => {
    console.log(event.target.value);
    dispatch(orderBy(event.target.value));
  };

  const onSearch = (event) => {
    event.preventDefault();
    if (recipe) {
      dispatch(searchRecipes(recipe));
    }
  };
  return (
    <form action="" onSubmit={onSearch}>
      <SearchBar handleChange={handleChange} />
      <FilterBar diets={diets} handleChangeOrder={handleChangeOrder} />
    </form>
  );
};

export default CardsForm;
