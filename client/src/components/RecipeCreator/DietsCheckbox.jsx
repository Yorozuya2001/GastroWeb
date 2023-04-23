/* Custom hook */
import useCheck from "../../customHooks/useCheck";

/* Componentes estilizados */
import {
  StyledCheckbox,
  StyledLabelInCheck,
  StyledDivContainsCheck,
} from "./RecipeCreator-styles";

const DietsCheckbox = ({ name, myRecipe, setMyRecipe }) => {
  const [capitalizeName, isChecked, handleCheckboxChange] = useCheck(
    name,
    myRecipe,
    setMyRecipe
  );
  return (
    <StyledDivContainsCheck>
      <StyledCheckbox
        type="checkbox"
        name="preferencias"
        value={name}
        checked={isChecked}
        onChange={(event) => handleCheckboxChange(event)}
      />
      <StyledLabelInCheck>{capitalizeName}</StyledLabelInCheck>
    </StyledDivContainsCheck>
  );
};

export default DietsCheckbox;
