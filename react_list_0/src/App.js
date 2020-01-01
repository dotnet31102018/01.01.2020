import React, { Component } from 'react';
import './App.css';
import Superheroes from './Superheroes';

class App extends Component {
  state = {
    heroes:
      [{ hero: "Superman", name: "Clark kent", power: "fly", id: 1 },
      { hero: "Batman", name: "Bruce Wayne", power: "Jump", id: 2 },
      { hero: "Spiderman", name: "Pitter Parker", power: "spiddy", id: 3 }]
  }
  render() {
    return (
      <div className="App">
        Hello World!
      <hr />
        <Superheroes heroes={this.state.heroes} />
      </div>
    );
  }
}

export default App;
