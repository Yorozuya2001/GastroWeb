import useDetail from "../../customHooks/useDetail";

import {
  StyledDivContainer,
  StyledDivDetail,
  StyledImg,
  StyledPSubTitle,
  StyledPtext,
  StyledNavLink,
} from "./CardDetail-styles";
import Loader from "../Loader/Loader";

const CardDetail = () => {
  const recipeInfo = useDetail();
  return (
    <StyledDivContainer>
      {
        /* Si tenemos el detalle entonces renderizamos si no esperamos a que lleguen todos los datos para evitar renderizar un undefined */
        Object.keys(recipeInfo).length !== 0 && recipeInfo.image ? (
          <>
            <StyledNavLink to="/home">Volver</StyledNavLink>
            <StyledDivDetail>
              <StyledDivContainer>
                <h2>{!recipeInfo.name ? recipeInfo.title : recipeInfo.name}</h2>
                <StyledImg
                  src={recipeInfo.image}
                  alt={`${!recipeInfo.name && recipeInfo.title}`}
                />
                <StyledPSubTitle>Id:</StyledPSubTitle>
                <StyledPtext>{recipeInfo.id}</StyledPtext>
                <StyledPSubTitle>Summary:</StyledPSubTitle>
                <StyledPtext
                  dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
                />
                <StyledPSubTitle>Steps:</StyledPSubTitle>
                <StyledPtext>
                  {recipeInfo.analyzedInstructions
                    ? recipeInfo.analyzedInstructions
                    : "-"}
                </StyledPtext>
                <StyledPSubTitle>Diets:</StyledPSubTitle>
                <StyledPtext>
                  {recipeInfo.diets ? recipeInfo.diets : "-"}
                </StyledPtext>
                <StyledPSubTitle>Health score:</StyledPSubTitle>
                <StyledPtext>{recipeInfo.healthScore}</StyledPtext>
              </StyledDivContainer>
            </StyledDivDetail>
          </>
        ) : (
          <Loader />
        )
      }
    </StyledDivContainer>
  );
};

export default CardDetail;
