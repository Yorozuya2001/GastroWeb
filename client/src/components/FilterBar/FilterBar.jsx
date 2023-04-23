/* Componentes estilizados */
import { StyledDiv, StyledSelect } from "./FilterBar-styles";

const FilterBar = ({
  diets,
  handleChangeOrder,
  handleChangeFilter,
  handleChangefilterByDiets,
}) => {
  return (
    <>
      <StyledDiv>
        {/*------------------- Selector de Orden ------------------- */}
        <StyledSelect name="order" id="order" onChange={handleChangeOrder}>
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
          <option value="lowest-hs-first">Lowest health score first</option>
          <option value="highest-hs-first">Highest health score first</option>
        </StyledSelect>
        {/*------------------- Selector de Filtros por API o DB ------------------- */}
        <StyledSelect name="" id="" onChange={handleChangeFilter}>
          <option value="all">All Recipes</option>
          <option value="db-recipes">My Recipes</option>
        </StyledSelect>
        {/*------------------- Selector de Filtros por Dieta ------------------- */}
        <StyledSelect name="" id="" onChange={handleChangefilterByDiets}>
          <option value="allDiets">All diets</option>
          {diets.map(({ name }) => {
            let capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <option value={name} key={name}>
                {capitalizeName}
              </option>
            );
          })}
        </StyledSelect>
      </StyledDiv>
    </>
  );
};

export default FilterBar;
