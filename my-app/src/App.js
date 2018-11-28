import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state={
    ninjas:[
      {name : 'Igor' , age: 47, belt :'black' , id : 1},
      {name : 'Liran' , age: 14, belt :'blue' , id : 2},
      {name : 'Yaniv' , age: 13, belt :'green' , id : 3}
    ]
  }

  addNinja=(ninja)=>{
    ninja.id = Math.random();    
    let newNinjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas:newNinjas
    })
  }

  deleteNinja=(id)=>{
    let ninjas = this.state.ninjas.filter(ninja=>{
      return ninja.id !== id
    })

    this.setState({
      ninjas:ninjas
    })
  }

  render() {
    return (
      <div className="App">
          <h1>My firt react app !</h1>
          <p>Welcome :)</p>
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
          <AddNinja addNinja={this.addNinja}></AddNinja>
      </div>
    );
  }
}

export default App;
