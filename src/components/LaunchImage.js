import React, { Component } from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100vh;
  background-color: #EEE;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  box-shadow: 0 -20px 20px -20px rgba(0, 0, 0, 0.3), 
    20px 0 20px -20px rgba(0, 0, 0, 0.3),
    0 20px 20px -20px rgba(0, 0, 0, 0.3);
  @media(min-width: 900px) {
    height: initial;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default class LaunchImage extends Component {
  render() {
    return (
      <StyledDiv image={this.props.image}/>
    )
  }
}
