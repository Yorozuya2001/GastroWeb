import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import vars from "../styledComponents-variables";

export const StyledDivMainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  width: 60%;
  height: auto;
  border-radius: 10px;
  background-color: ${vars.color_5};
  padding: 32px;
  margin: 32px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: ${vars.text_size_principal};
    text-align: center;
    margin-bottom: 32px;
    color: ${vars.color_3};
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  ${(props) =>
    props.desktop &&
    css`
      @media (max-width: 1400px) {
        width: 80%;
      }
    `}

  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 768px) {
        width: 90%;
        padding: 16px;
        h2 {
          font-size: ${vars.text_size_principal_mobile};
        }
      }
    `}
`;

export const StyledHenryImage = styled.img`
  align-self: center;
  margin-bottom: 32px;
  width: 80%;
  height: auto;
`;

export const StyledImage = styled.img`
  width: 100px;
  height: auto;
`;

export const StyledPText = styled.div`
  font-size: ${vars.text_size_seccion};
  color: ${vars.color_3};
  text-align: center;
  margin-top: 48px;
  width: 80%;

  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 768px) {
        width: 95%;
        font-size: ${vars.text_size_seccion_mobile};
        text-align: justify;
      }
    `}
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  margin: 0 72px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  p {
    font-size: ${vars.text_size_seccion};
    margin-top: 16px;
    color: ${vars.color_3};
  }
`;
