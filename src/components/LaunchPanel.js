import React, { Component } from 'react'
import styled from 'styled-components';

import LaunchDetails from './LaunchDetails';
import LaunchImage from './LaunchImage';

const StyledDiv = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 60% 1fr;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export default class LaunchPanel extends Component {
  render() {
    return (
      <StyledDiv>
        <LaunchDetails launches={this.props.launches}/>
        <LaunchImage image={this.props.launches ? this.props.launches[0].rocket.imageURL : ''}/>
      </StyledDiv>
    )
  }
}
