import React, { Component } from 'react'
import styled from 'styled-components';
import background from '../assets/background.jpg';
import LaunchPanel from './LaunchPanel';
import Arrow from './Arrow';
import arrowDown from '../assets/chevron-down.svg';


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

const StyledArrow = styled(Arrow)`
  margin: 10px auto;  
`;

export default class NextLaunch extends Component {
  handleArrowClick = () => {
    window.scrollTo(0,document.body.scrollHeight);
  }

  render() {
    return (
      <StyledWrapper>
        <StyledHeader>NEXT LAUNCH</StyledHeader>
        <LaunchPanel/>
        <StyledArrow src={arrowDown} alt="More launches" onClick={this.handleArrowClick}/>
      </StyledWrapper>
    )
  }
}
