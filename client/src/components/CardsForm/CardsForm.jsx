/* Componentes de React */
import SearchBar from "../SearchBar/SearchBar";
import FilterBar from "../FilterBar/FilterBar";

/* Custom Hook */
import useOptions from "../../customHooks/useOptions";

const CardsForm = () => {
  const [diets, handleChange, handleChangeOrder, handleChangeFilter, onSearch] =
    useOptions();

  return (
    <form onSubmit={onSearch}>
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
