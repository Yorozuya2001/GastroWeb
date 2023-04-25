import styled, { css } from "styled-components";
import vars from "../styledComponents-variables";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0 16px 0;
  ${(props) =>
    props.mobile &&
    css`
      @media (max-width: 968px) {
        margin: 16px 16px;
      }
    `}
`;

export const StyledInput = styled.input`
  color: black;
  padding: 8px 16px;
  border: 0;
  width: 610px;
  height: 50px;
  &:focus {
    outline: none;
    text-shadow: 0 0 20px ${vars.color_1};
    box-shadow: 0 0 20px ${vars.color_1};
  }
`;

export const StyledButton = styled.button`
  background-color: ${vars.color_1};
  color: ${vars.color_5};
  border: none;
  height: 50px;
  padding: 8px 16px;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${vars.color_2};
  }
`;
