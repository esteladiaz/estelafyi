import React, { Component } from 'react'
import Metadata from './components/Metadata'

class App extends Component {
  render() {
    return (
      <div>
        <Metadata />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
