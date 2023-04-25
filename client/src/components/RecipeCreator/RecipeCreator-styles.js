import styled, { css } from "styled-components";
import vars from "../styledComponents-variables";

export const StyledInput = styled.input`
  color: ${vars.color_3};
  height: 32px;
  padding: 8px;
  border: 2px solid
    ${(props) => (props.isCorrect ? vars.color_1 : vars.color_2)};
  outline-color: ${(props) => (props.isCorrect ? vars.color_1 : vars.color_2)};

  &:focus {
    outline-color: ${(props) =>
      props.isCorrect ? vars.color_1 : vars.color_2};
  }
`;

export const StyledLabel = styled.label`
  color: ${vars.color_3};
  margin-bottom: 8px;
`;

export const StyledLabelInCheck = styled.label`
  color: ${vars.color_3};
  display: inline;
`;

export const StyledDivContainerForm = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledDivCheckbox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  background-color: ${vars.color_5};
  border-radius: 10px;
  padding: 16px;
  width: 50%;
  margin: 16px;

  ${(props) =>
    props.desktop &&
    css`
      @media (max-width: 1400px) {
        width: 70%;
      }
    `}

  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 768px) {
        width: 90%;
      }
    `}
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  color: ${vars.color_3};
  margin: 8px 8px;
  width: 18px;
  height: 18px;
  border: none;
  cursor: pointer;

  &:checked {
    accent-color: ${vars.color_1};
  }
`;

export const StyledDivButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const StyledButton = styled.button`
  width: 50%;
  border: none;
  background-color: ${vars.color_1};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: ${vars.text_size_seccion};
  text-align: center;
  padding: 8px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: white;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: ${vars.color_2};
      }
    `}
`;

export const StyledDivContainsCheck = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledP = styled.p`
  color: ${vars.color_1};
`;

export const StyledPSuccess = styled.p`
  color: ${vars.color_2};
  text-align: center;
  margin: 16px 0;
  font-size: ${vars.text_size_seccion};
`;

export const StyledPError = styled.p`
  color: ${vars.color_1};
  text-align: center;
  margin: 16px 0;
  font-size: ${vars.text_size_seccion};
`;
