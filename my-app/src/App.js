import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>My firt react app !</h1>
          <p>Welcome :)</p>
          <Ninjas></Ninjas>
      </div>
    );
  }
}

export default App;
