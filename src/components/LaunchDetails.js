import React, { Component } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #eee;
  text-align: center;
  color: #444;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media(min-width: 900px) {
    overflow: auto;
    padding: 20px 60px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
`;

const StyledInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  @media(min-width: 900px) {
    margin: 10px 0;
    font-size: 4.7rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  margin-top: 20px;
`;

const StyledP = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
`;

export default class LaunchDetails extends Component {
  rawLaunchToDetails = (launch) => {
    const { name } = launch.missions[0] || launch;
    const { description } = launch.missions[0] || '';
    const { date } = launch;
    const rocketName= launch.rocket.name;
    const location = launch.location.name;
    return (
      <StyledDiv>
        <StyledH1>{name}</StyledH1>
        <StyledP>{date}</StyledP>
        <StyledInfo>
          <StyledH2>Rocket:</StyledH2>
          <StyledP>{rocketName}</StyledP>
          <StyledH2>Launch from:</StyledH2>
          <StyledP>{location}</StyledP>
          <StyledH2>Mission description:</StyledH2>
          <StyledP>
            {description}
          </StyledP>
        </StyledInfo>
      </StyledDiv>
    )
  }

  render() {    
    return (
      this.props.launches ? this.rawLaunchToDetails(this.props.launches[0]) : <StyledDiv>Loading...</StyledDiv>
    )
  }
}
