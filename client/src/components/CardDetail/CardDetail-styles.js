import styled from "styled-components";
import vars from "../styledComponents-variables";
import { NavLink } from "react-router-dom";
export const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const StyledDivDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;
  width: 60%;
  background-color: ${vars.color_5};
  border-radius: 10px;
  border: 3px solid ${vars.color_1};
  padding: 16px;
  h2 {
    color: ${vars.color_3};
    margin-bottom: 8px;
    font-size: ${vars.text_size_principal};
    text-align: center;
  }
`;

export const StyledImg = styled.img`
  width: 40%;
  height: auto;
  border: 3px solid ${vars.color_1};
  object-fit: cover;
  border-radius: 10px;
  margin: 16px 0;
`;

export const StyledPSubTitle = styled.p`
  color: ${vars.color_3};
  font-size: ${vars.text_size_secondary};
  text-align: center;
  margin-bottom: 16px;
`;

export const StyledPtext = styled.p`
  color: ${vars.color_3};
  font-size: ${vars.text_size_seccion};
  margin-bottom: 16px;
  text-align: center;

  b {
    color: ${vars.color_3};
  }

  a {
    color: ${vars.color_2};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${vars.color_5};
  background-color: ${vars.color_1};
  border-radius: 10px;
  padding: 16px;
  text-decoration: none;
  margin-top: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${vars.color_2};
  }
`;
