import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../../redux/actions";
import {
  StyledDivContainer,
  StyledDivDetail,
  StyledImg,
  StyledPSubTitle,
  StyledPtext,
  StyledNavLink,
} from "./CardDetail-styles";

const CardDetail = () => {
  const dispatch = useDispatch();
  const recipeInfo = useSelector((state) => state.recipeInfo);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getRecipeById(id));
  }, []);

  return (
    <StyledDivContainer>
      <StyledNavLink to="/home">Volver</StyledNavLink>
      <StyledDivDetail>
        {recipeInfo ? (
          <>
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
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </StyledDivDetail>
    </StyledDivContainer>
  );
};

export default CardDetail;
