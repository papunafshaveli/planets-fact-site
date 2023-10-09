import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";
import "../pages/planet.css";
export default function Planet() {
  const params = useParams();
  const planetData = data.find((item) => {
    return item.name.toUpperCase() == params.planet;
  });
  return (
    <PlanetDiv>
      <PlanetImages>
        <img src={planetData.images.planet} alt="Photo of planet" />
      </PlanetImages>
      <PlanetNameAndInfo>
        <PlanetName>{planetData.name}</PlanetName>
        <PlanetDescription>{planetData.overview.content}</PlanetDescription>
        <Source>
          Source:
          <Wikipedia>
            <a href={planetData.overview.source}>Wikipedia</a>{" "}
          </Wikipedia>
        </Source>
      </PlanetNameAndInfo>
      {/* PlanetNameAndInfo და მართკუთხა ინფოები მოვაქციო ერთ დივში და გავფლექსო */}
      ჰორიზონტალურად
    </PlanetDiv>
  );
}
const PlanetDiv = styled.div``;

const PlanetImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlanetNameAndInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const PlanetName = styled.h1`
  font-size: 4.8rem;
  font-weight: 400;
`;

const PlanetDescription = styled.p`
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 2.2rem;
`;

const Source = styled.span`
  font-size: 2.1rem;
`;

const Wikipedia = styled.span`
  font-size: 2.1rem;
`;
