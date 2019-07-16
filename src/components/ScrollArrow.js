import React, { Component } from 'react'
import styled from 'styled-components';
import arrow from '../assets/chevron-down.svg';

const StyledImg = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin: 10px auto;
`;

export default class ScrollArrow extends Component {
  render() {
    return (
      <StyledImg src={arrow} alt="More launches"/>
    )
  }
}
