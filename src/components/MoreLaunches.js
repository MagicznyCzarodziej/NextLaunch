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
  font-size: 50px;
  text-align: center;
  padding: 10px 0;
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
