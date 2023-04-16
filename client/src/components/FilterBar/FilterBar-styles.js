import styled from "styled-components";
import vars from "../styledComponents-variables";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledSelect = styled.select`
  padding: 0 16px;
  color: black;
  margin: 16px 16px;
  border: 0;
  width: 310px;
  height: 50px;
  cursor: pointer;
  &:focus {
    outline: none;
    text-shadow: 0 0 20px ${vars.color_1};
    box-shadow: 0 0 20px ${vars.color_1};
  }

  option {
    background-color: ${vars.color_1};
    font-size: ${vars.text_size};
  }
`;
