import React, { Component } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #EEE;
  background-image: url('https://via.placeholder.com/400x800');
  background-size: cover;
  background-position: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 -20px 20px -20px rgba(0, 0, 0, 0.3), 
    20px 0 20px -20px rgba(0, 0, 0, 0.3),
    0 20px 20px -20px rgba(0, 0, 0, 0.3);
`;

export default class LaunchImage extends Component {
  render() {
    return (
      <StyledDiv>

      </StyledDiv>
    )
  }
}
