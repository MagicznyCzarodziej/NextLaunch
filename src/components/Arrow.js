import React, { Component } from 'react'
import styled from 'styled-components';

const StyledImg = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition-duration: 0.2s;
  :active {
    transform: scale(1.2, 1.2);
  }
`;

export default class ScrollArrow extends Component {
  render() {
    return (
      <StyledImg onClick={this.props.onClick} className={this.props.className} src={this.props.src}/>
    )
  }
}
