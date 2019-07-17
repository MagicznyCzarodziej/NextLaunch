import React, { Component } from 'react'
import styled from 'styled-components';
import Arrow from './Arrow';
import arrowLeft from '../assets/chevron-left.svg';
import arrowRight from '../assets/chevron-right.svg';

const Container = styled.div`
  height: 100%;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth; 
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Launch = styled.div`
  min-width: 400px;
  height: 100%;
  flex-grow: 1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const LaunchLabel = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  bottom: 0;
`;

const StyledArrow = styled(Arrow)`
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  right: ${({direction}) => direction === 'right' ? 0 : 'initial'};
  top: 50%;
  z-index: 100;
`;

export default class LaunchesContainer extends Component {
  constructor() {
    super();
    this.state = {
      isScrollable: false,
    }
  }

  componentDidMount() {
    const { container } = this.refs;
    this.setState({
      isScrollable:container.scrollWidth > container.clientWidth,
    })
  }

  handleArrowClick = (direction) => {
    const SCROLL_DISTANCE = 600;
    this.refs.container.scrollBy(direction === 'left' ? -SCROLL_DISTANCE : SCROLL_DISTANCE , 0);  
  }

  render() {
    return (
      <Container ref="container">
        {this.state.isScrollable && <StyledArrow direction="left" src={arrowLeft} alt="<" onClick={(e) => this.handleArrowClick('left', e)}/>}
        {this.state.isScrollable && <StyledArrow direction="right" src={arrowRight} alt=">" onClick={(e) => this.handleArrowClick('right', e)}/>}
        <Launch image="https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg">
          <LaunchLabel>SPX SRS-18</LaunchLabel>
        </Launch>
        <Launch image="https://s3.amazonaws.com/launchlibrary/RocketImages/Soyuz-FG_2560.jpg">
          <LaunchLabel>Soyuz MS-13</LaunchLabel>
        </Launch>
        <Launch image="https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg">
          <LaunchLabel>SPX SRS-18</LaunchLabel>
        </Launch>
        <Launch image="https://s3.amazonaws.com/launchlibrary/RocketImages/Soyuz-FG_2560.jpg">
          <LaunchLabel>SPX SRS-18</LaunchLabel>
        </Launch>
      </Container>
    )
  }
}
