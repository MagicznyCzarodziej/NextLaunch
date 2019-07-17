import React, { Component } from 'react'
import styled from 'styled-components';
import LaunchesContainter from './LaunchesContainer';

const StyledWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative; /* Required for slider arrows positioning */
`;

const StyledHeader = styled.header`
  background-color: #EEE;
  color: #222;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  padding: 10px;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  @media(min-width: 900px) {
    font-size: 4rem;
  }
`;

export default class MoreLaunches extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledHeader>
          MORE LAUNCHES
        </StyledHeader>
        {this.props.launches && <LaunchesContainter launches={this.props.launches}/>}
      </StyledWrapper>
    )
  }
}
