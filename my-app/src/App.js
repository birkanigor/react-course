import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>My firt react app !</h1>
          <p>Welcome :)</p>
          <Ninjas name="Igor" age="47" belt="black"></Ninjas>
          <Ninjas name="Liran" age="42" belt="red"></Ninjas>
      </div>
    );
  }
}

export default App;
