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
  font-size: 2.5rem;
  font-weight: 300;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  bottom: 0;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
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

  rawLaunchesToComponents = (launch, index) => {
    if (index === 0) return;
    const image = launch.rocket.imageURL;
    const { name } = launch.missions[0] || launch;
    return (
      <Launch image={image}>
        <LaunchLabel>{name}</LaunchLabel>
      </Launch>
    )
  }

  render() {
    return (
      <Container ref="container">
        {this.state.isScrollable && <StyledArrow direction="left" src={arrowLeft} alt="<" onClick={(e) => this.handleArrowClick('left', e)}/>}
        {this.state.isScrollable && <StyledArrow direction="right" src={arrowRight} alt=">" onClick={(e) => this.handleArrowClick('right', e)}/>}
        {this.props.launches.map(this.rawLaunchesToComponents)}
      </Container>
    )
  }
}
