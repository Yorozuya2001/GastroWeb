import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import vars from "../styledComponents-variables";

export const NavHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  background-color: ${vars.color_1};
  font-size: ${vars.text_size_seccion};
  width: 100%;
`;

export const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  ${(props) =>
    props.mobile &&
    css`
      @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
      }
    `}
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  margin: 0 24px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${vars.color_4};
    text-decoration: underline;
  }
  &.active {
    color: ${vars.color_4};
    text-decoration: underline;
  }

  ${(props) =>
    props.mobile &&
    css`
      @media (max-width: 576px) {
        font-size: ${vars.text_size_seccion_mobile};
        padding: 6px 0;
      }
    `}
`;

export const StyledDiv = styled.div`
  background-color: white;
  height: 40px;
  width: 90px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.phone &&
    css`
      @media (max-width: 576px) {
        margin-bottom: 16px;
      }
    `}
`;
