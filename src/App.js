import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header.js'
import Employment from './Employment.js'
import Projects from './Projects.js'
import Skills from './Skills.js'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="width-limiter">
          <Header />
          <Employment />
          <Projects />
          <Skills />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
