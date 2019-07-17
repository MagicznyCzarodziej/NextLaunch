import React from 'react';
import { createGlobalStyle } from 'styled-components';
import NextLaunch from './components/NextLaunch';
import MoreLaunches from './components/MoreLaunches';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  * {
    box-sizing: border-box;
  }
`

export default class App extends React.Component {
  render () {
    return (
      <>
        <GlobalStyle/>
        <div className="App">
          <NextLaunch/>
          <MoreLaunches/>
        </div>
      </>
    );
  }
}
