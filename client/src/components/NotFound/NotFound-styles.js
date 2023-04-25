import styled from "styled-components";
import vars from "../styledComponents-variables";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const StyledP = styled.p`
  font-size: ${vars.text_size_principal};
`;

export const StyledImg = styled.img`
  width: 250px;
  height: auto;
`;
