import React, { Component } from 'react'
import styled from 'styled-components';

import LaunchDetails from './LaunchDetails';
import LaunchImage from './LaunchImage';

const StyledDiv = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: auto 400px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export default class LaunchPanel extends Component {
  render() {
    return (
      <StyledDiv>
        <LaunchDetails/>
        <LaunchImage/>
      </StyledDiv>
    )
  }
}
