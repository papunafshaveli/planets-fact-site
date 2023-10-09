import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Header() {
  return (
    <HeaderDiv>
      <ThePlanets>THE PLANETS</ThePlanets>
      <PlanetsDiv>
        <Link to="/MERCURY">MERCURY</Link>
        <Link to="/VENUS">VENUS</Link>
        <Link to="/EARTH">EARTH</Link>
        <Link to="/MARS">MARS</Link>
        <Link to="/JUPITER">JUPITER</Link>
        <Link to="/SATURN">SATURN</Link>
        <Link to="/URANUS">URANUS</Link>
        <Link to="/NEPTUNE">NEPTUNE</Link>
      </PlanetsDiv>
    </HeaderDiv>
  );
}
const HeaderDiv = styled.div``;

const ThePlanets = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 3.9rem;
`;
const PlanetsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2.1rem;
`;
const StyledLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2.7rem;
`;
