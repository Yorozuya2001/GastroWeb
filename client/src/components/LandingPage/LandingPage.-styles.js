import styled from "styled-components";
import vars from "../styledComponents-variables";

export const StyledDiv = styled.div`
  background-color: #00000098;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledH1 = styled.h1`
  font-size: ${vars.text_size_h1};
  margin-bottom: 48px;
`;

export const StyledButton = styled.button`
  background-color: ${vars.color_1};
  padding: 16px;
  border-radius: 10px;
  border: none;
  font-size: ${vars.text_size_seccion};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${vars.color_2};
  }
`;
