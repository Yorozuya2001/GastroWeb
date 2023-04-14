import React, { useEffect } from "react";
import { StyledDiv, StyledSelect } from "./FilterBar-styles";
import DietsCheckbox from "./DietsCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";

const FilterBar = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  console.log(diets);

  useEffect(() => {
    dispatch(getDiets());
  }, [diets]);
  return (
    <>
      <StyledDiv>
        <StyledSelect name="" id="">
          <option value="">A - Z</option>
          <option value="">Z - A</option>
          <option value="">Lowest health score first</option>
          <option value="">Highest health score first</option>
        </StyledSelect>
        <StyledSelect name="" id="">
          <option value="">All Recipes</option>
          <option value="">My Recipes</option>
        </StyledSelect>
      </StyledDiv>
      <div>
        {diets?.map((diet) => {
          return <DietsCheckbox name={diet.name} />;
        })}
      </div>
    </>
  );
};

export default FilterBar;
