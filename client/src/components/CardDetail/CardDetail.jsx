import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getRecipeById } from "../../redux/actions";
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
  const dispatch = useDispatch();
  const recipeInfo = useSelector((state) => state.recipeInfo);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getRecipeById(id));

    return () => dispatch(clearDetail());
  }, [id]);

  return (
    <StyledDivContainer>
      {Object.keys(recipeInfo).length !== 0 && recipeInfo.image ? (
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
              </StyledPtext>{" "}
              <StyledPSubTitle>Health score:</StyledPSubTitle>
              <StyledPtext>{recipeInfo.healthScore}</StyledPtext>
            </StyledDivContainer>
          </StyledDivDetail>
        </>
      ) : (
        <Loader />
      )}
    </StyledDivContainer>
  );
};

export default CardDetail;
