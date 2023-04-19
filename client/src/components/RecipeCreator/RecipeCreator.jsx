import { useState } from "react";
import DietsCheckbox from "./DietsCheckbox";
import { useSelector } from "react-redux";
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
} from "./RecipeCreator-styles";
import validateRecipe from "./validateRecipe";

const RecipeCreator = () => {
  const diets = useSelector((state) => state.diets);
  const [myRecipe, setMyRecipe] = useState({
    name: "",
    summary: "",
    healthScore: "",
    analyzedInstructions: "",
    image: "",
    diets: [],
  });
  const [errors, setErrors] = useState({
    name: "Completa el campo nombre",
    summary: "Completa el campo summary",
    healthScore: "Complete tu puntuacion",
    analyzedInstructions: "Completa las instrucciones",
    image: "Completa la url de las imagenes",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setMyRecipe({ ...myRecipe, [name]: value });

    setErrors(
      validateRecipe({
        ...myRecipe,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(myRecipe);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myRecipe),
    };

    fetch("http://localhost:3001/recipes", options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error al enviar los datos al servidor");
        }
      })
      .then((responseData) => {
        console.log("Datos enviados correctamente:", responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <StyledDivContainerForm>
      <StyledForm action="" onSubmit={handleSubmit}>
        <StyledDiv>
          <StyledLabel
            htmlFor="name"
            onChange={handleChange}
            value={myRecipe.name}
          >
            Name of recipe* :
          </StyledLabel>
          <StyledInput
            type="text"
            name="name"
            onChange={handleChange}
            isCorrect={errors.name ? true : false}
            value={myRecipe.name}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel htmlFor="name">Summary* :</StyledLabel>
          <StyledInput
            type="text"
            name="summary"
            onChange={handleChange}
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
            onChange={handleChange}
            isCorrect={errors.healthScore ? true : false}
            value={myRecipe.healthScore}
          />
        </StyledDiv>
        <StyledDiv>
          <StyledLabel htmlFor="name">Steps* :</StyledLabel>
          <StyledInput
            type="text"
            name="analyzedInstructions"
            onChange={handleChange}
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
            onChange={handleChange}
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
          <StyledButton type="submit">Create recipe</StyledButton>
        </StyledDivButtonContainer>
      </StyledForm>
    </StyledDivContainerForm>
  );
};

export default RecipeCreator;
