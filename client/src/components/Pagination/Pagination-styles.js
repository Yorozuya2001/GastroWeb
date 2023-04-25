import styled, { css } from "styled-components";
import vars from "../styledComponents-variables";
export const StyledButtonNumber = styled.button`
  padding: 16px;
  background-color: ${(props) =>
    props.number === props.currentPage ? vars.color_2 : vars.color_1};
  border-radius: 5px;
  margin: 10px 10px;
  border: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: all 0.3s ease-in-out;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background-color: ${vars.color_2};
      }
    `}

  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 768px) {
        margin: 10px 10px;
      }
    `}
`;
