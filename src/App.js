import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    );
  }
}

export default App;
