import styled from "styled-components";
import vars from "../styledComponents-variables";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${vars.color_5};

  border-radius: 10px;
  margin: 16px;

  width: 460px;
  height: 610px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }

  h2,
  p {
    color: ${vars.color_3};
  }
`;

export const StyledH2 = styled.h2`
  text-align: center;
  font-size: ${vars.text_size_secondary};
  margin: 16px;
`;

export const StyledDivImage = styled.div`
  display: flex;
  width: 100%;
  height: 230px;
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: auto;
`;

export const StyledP = styled.p`
  text-align: center;
  font-size: ${vars.text_size_seccion};
  margin: 16px;
`;

export const StyledButton = styled.button`
  padding: 16px;
  background-color: ${vars.color_1};
  border-radius: 10px;
  outline: none;
  border: none;
  margin: 12px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${vars.color_2};
  }
`;
