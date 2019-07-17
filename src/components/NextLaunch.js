import React, { Component } from 'react'
import styled from 'styled-components';
import background from '../assets/background.jpg';
import LaunchPanel from './LaunchPanel';
import ScrollArrow from './ScrollArrow';


const StyledWrapper = styled.div`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const StyledHeader = styled.header`
  padding: 20px 0;
  font-size: 75px;
  font-weight: 300;
  color: #EEE;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export default class NextLaunch extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledHeader>NEXT LAUNCH</StyledHeader>
        <LaunchPanel/>
        <ScrollArrow/>
      </StyledWrapper>
    )
  }
}
