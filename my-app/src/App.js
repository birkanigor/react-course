import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state={
    ninjas:[
      {name : 'Igor' , age: 47, belt :'black' , id : 1},
      {name : 'Liran' , age: 14, belt :'blue' , id : 2},
      {name : 'Yaniv' , age: 13, belt :'green' , id : 3}
    ]
  }
  render() {
    return (
      <div className="App">
          <h1>My firt react app !</h1>
          <p>Welcome :)</p>
          <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
