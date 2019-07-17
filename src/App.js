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

const API_URL = 'https://launchlibrary.net/1.4/launch/next/10';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       launches: null,
    }
  }
  
  async componentWillMount () {
    const result = await fetch(API_URL);
    const data = await result.json();
    const { launches } = data;
    
    this.setState({
      launches: launches,
    })
  }

  render () {
    return (
      <>
        <GlobalStyle/>
        <div className="App">
          <NextLaunch launches={this.state.launches}/>
          {this.state.launches && <MoreLaunches launches={this.state.launches}/>}
        </div>
      </>
    );
  }
}
