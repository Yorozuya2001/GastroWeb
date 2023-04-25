/* Custom hook */
import useRecipeCreator from "../../customHooks/useRecipeCreator";

/* Componente de React */
import DietsCheckbox from "./DietsCheckbox";

/* Componentes estilizados */
import {
  StyledInput,
  StyledDivContainerForm,
  StyledForm,
  StyledDiv,
  StyledLabel,
  StyledDivCheckbox,
  StyledDivButtonContainer,
  StyledButton,
  StyledP,
  StyledPSuccess,
  StyledPError,
} from "./RecipeCreator-styles";

const RecipeCreator = () => {
  const [
    diets,
    myRecipe,
    setMyRecipe,
    boolean,
    errors,
    setErrors,
    message,
    setMessage,
    handleChange,
    handleSubmit,
  ] = useRecipeCreator();

  return (
    <StyledDivContainerForm>
      <StyledForm
        desktop
        tablet
        onSubmit={(event) => handleSubmit(event, myRecipe, setMessage)}
      >
        <StyledDiv>
          <StyledLabel
            htmlFor="name"
            onChange={(event) =>
              handleChange(event, setMyRecipe, myRecipe, setErrors)
            }
            value={myRecipe.name}
          >
            Name of recipe* :
          </StyledLabel>
          <StyledInput
            type="text"
            name="name"
            onChange={(event) =>
              handleChange(event, setMyRecipe, myRecipe, setErrors)
            }
            isCorrect={errors.name ? true : false}
            value={myRecipe.name}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel htmlFor="name">Summary* :</StyledLabel>
          <StyledInput
            type="text"
            name="summary"
            onChange={(event) =>
              handleChange(event, setMyRecipe, myRecipe, setErrors)
            }
            isCorrect={errors.summary ? true : false}
            value={myRecipe.summary}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel htmlFor="name">
            Health Score* (min 0 - max 100) :
          </StyledLabel>
          <StyledInput
            type="text"
            name="healthScore"
            onChange={(event) =>
              handleChange(event, setMyRecipe, myRecipe, setErrors)
            }
            isCorrect={errors.healthScore ? true : false}
            value={myRecipe.healthScore}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel htmlFor="name">Steps* :</StyledLabel>
          <StyledInput
            type="text"
            name="analyzedInstructions"
            onChange={(event) =>
              handleChange(event, setMyRecipe, myRecipe, setErrors)
            }
            isCorrect={errors.analyzedInstructions ? true : false}
            value={myRecipe.analyzedInstructions}
          />
        </StyledDiv>

        <StyledDiv>
          <StyledLabel htmlFor="name">
            Image* (only JPG-PNG-JPEG in URL format) :
          </StyledLabel>
          <StyledInput
            type="text"
            name="image"
            placeholder="https://www.example.com/image.png"
            value={myRecipe.image}
            isCorrect={errors.image ? true : false}
            onChange={(event) =>
              handleChange(event, setMyRecipe, myRecipe, setErrors)
            }
          />
        </StyledDiv>
        <StyledLabel htmlFor="name">Select types of diets :</StyledLabel>
        <StyledDivCheckbox>
          {diets?.map((diet) => {
            return (
              <DietsCheckbox
                key={diet.id}
                name={diet.name}
                myRecipe={myRecipe}
                setMyRecipe={setMyRecipe}
              />
            );
          })}
        </StyledDivCheckbox>
        {errors.name && <StyledP>{errors.name}</StyledP>}
        {errors.summary && <StyledP>{errors.summary}</StyledP>}
        {errors.healthScore && <StyledP>{errors.healthScore}</StyledP>}
        {errors.image && <StyledP>{errors.image}</StyledP>}
        {errors.analyzedInstructions && (
          <StyledP>{errors.analyzedInstructions}</StyledP>
        )}
        <StyledDivButtonContainer>
          <StyledButton type="submit" disabled={boolean}>
            Create recipe
          </StyledButton>
        </StyledDivButtonContainer>
        {message.text && !message.isError ? (
          <StyledPSuccess>{message.text}</StyledPSuccess>
        ) : (
          <StyledPError>{message.text}</StyledPError>
        )}
      </StyledForm>
    </StyledDivContainerForm>
  );
};

export default RecipeCreator;
