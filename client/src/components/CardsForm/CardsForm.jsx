import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { filterBy, orderBy, searchRecipes } from "../../redux/actions";
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

  const handleChangeFilter = (event) => {
    console.log(event.target.value);
    dispatch(filterBy(event.target.value));
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
      <FilterBar
        key="filter"
        diets={diets}
        handleChangeOrder={handleChangeOrder}
        handleChangeFilter={handleChangeFilter}
      />
    </form>
  );
};

export default CardsForm;
