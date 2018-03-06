import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header.js'
import Employment from './Employment.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="width-limiter">
          <Header />
          <Employment />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
