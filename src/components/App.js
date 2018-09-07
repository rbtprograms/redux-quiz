import React, { Component } from 'react';
import Display from './Display';
import Controls from './Controls';


class App extends Component {

  render() {

    return (
      <div>
        <Display/>
        <Controls/>
      </div>
    );
  }
}

export default App;