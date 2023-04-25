import styled, { css } from "styled-components";
import vars from "../styledComponents-variables";

export const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 768px) {
        flex-wrap: wrap;
      }
    `}
`;

export const StyledPagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 768px) {
        flex-wrap: wrap;
        margin: 16px 0;
      }
    `}
`;

export const StyledButton = styled.button`
  padding: 16px;
  background-color: ${vars.color_1};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: none;
  margin: 0 64px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: ${vars.color_2};
      }
    `}
`;
