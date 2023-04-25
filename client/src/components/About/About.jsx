import React from "react";
import {
  StyledDivMainContainer,
  StyledDiv,
  StyledImage,
  StyledDivContainer,
  StyledPText,
  StyledHenryImage,
  StyledLink,
} from "./About-styles";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import portfolio from "../../assets/portfolio.svg";
import henry from "../../assets/henry.png";
const About = () => {
  return (
    <StyledDivMainContainer>
      <StyledDiv tablet desktop>
        <h2>This project was made by Axel Ariel Valiente</h2>
        <StyledHenryImage src={henry} alt="SoyHenry" />
        <div>
          <StyledLink to="https://github.com/Yorozuya2001" target="_blank">
            <StyledImage src={github} alt="Portfolio" />
            <p>Github</p>
          </StyledLink>
          <StyledLink
            to="https://www.linkedin.com/in/axel-valiente-a312021b4/"
            target="_blank"
          >
            <StyledImage src={linkedin} alt="LinkedIn" />
            <p>LinkedIn</p>
          </StyledLink>
          <StyledLink to="https://axelvaliente.netlify.app/" target="_blank">
            <StyledImage src={portfolio} alt="Portfolio" />
            <p>Portfolio</p>
          </StyledLink>
        </div>
        <div>
          <StyledPText tablet>
            This is a personal endeavor that is included in my individual
            project assignment for HENRY. The focus of this project is on food
            recipes, and my objective is to generate a catalog that resembles a
            recipe book. To achieve this, I will be utilizing an external API
            and a database that I have personally created. The catalog will
            include filtering options that allow users to locate specific
            information and a sorting feature to organize the data.
            Additionally, users will have the ability to contribute their own
            recipes and add them to the database.
          </StyledPText>
        </div>
      </StyledDiv>
    </StyledDivMainContainer>
  );
};

export default About;
