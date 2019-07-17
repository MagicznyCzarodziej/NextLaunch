import React, { Component } from 'react'
import styled from 'styled-components';
import background from '../assets/background.jpg';
import LaunchPanel from './LaunchPanel';
import Arrow from './Arrow';
import arrowDown from '../assets/chevron-down.svg';

const StyledWrapper = styled.div`
  background-color: #000011;
  @media(min-width: 900px) {
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;

const StyledHeader = styled.header`
  padding: 20px;
  font-size: 3rem;
  font-weight: 300;
  color: #EEE;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  text-align: center;
  @media(min-width: 900px) {
    font-size: 4.7rem;
  }
`;

const StyledArrow = styled(Arrow)`
  display: none;
  margin: 10px auto;  
  @media(min-width: 900px) {
    display: block;
  }
`;

export default class NextLaunch extends Component {
  handleArrowClick = () => {
    if (!this.props.launches) return;
    window.scrollTo(0,document.body.scrollHeight);
  }

  render() {
    return (
      <StyledWrapper>
        <StyledHeader>NEXT LAUNCH</StyledHeader>
        <LaunchPanel launches={this.props.launches}/>
        <StyledArrow src={arrowDown} alt="More launches" onClick={this.handleArrowClick}/>
      </StyledWrapper>
    )
  }
}
