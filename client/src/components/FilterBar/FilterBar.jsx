import { StyledDiv, StyledSelect } from "./FilterBar-styles";
import DietsCheckbox from "./DietsCheckbox";

const FilterBar = ({ diets, handleChangeOrder }) => {
  return (
    <>
      <StyledDiv>
        <StyledSelect name="order" id="order" onChange={handleChangeOrder}>
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
          <option value="lowest-hs-first">Lowest health score first</option>
          <option value="highest-hs-first">Highest health score first</option>
        </StyledSelect>
        <StyledSelect name="" id="">
          <option value="all">All Recipes</option>
          <option value="db-recipes">My Recipes</option>
        </StyledSelect>
      </StyledDiv>
      <div>
        {diets?.map((diet) => {
          return <DietsCheckbox key={diet.id} name={diet.name} />;
        })}
      </div>
    </>
  );
};

export default FilterBar;
