import React, { Component } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #eee;
  text-align: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #444;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const StyledInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-size: 75px;
  font-weight: 400;
  margin: 10px 0;
`;

const StyledH2 = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  margin-top: 20px;
`;

const StyledP = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: 300;
`;

export default class LaunchDetails extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledH1>SPX CRS-18</StyledH1>
        <StyledP>July 20, 2019 16:28:21 UTC</StyledP>
        <StyledInfo>
          <StyledH2>Rocket:</StyledH2>
          <StyledP>Falcon 9 Block 5</StyledP>
          <StyledH2>Launch from:</StyledH2>
          <StyledP>Space Launch Complex 40, Cape Canaveral, FL</StyledP>
          <StyledH2>Mission description:</StyledH2>
          <StyledP>
            SpaceX will launch the Dragon spacecraft on their 18th operational cargo delivery 
            mission to the International Space Station. The flight is being conducted under the 
            Commercial Resupply Services contract with NASA.
          </StyledP>
        </StyledInfo>
      </StyledDiv>
    )
  }
}
