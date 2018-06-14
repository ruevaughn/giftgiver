import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {gifts: [] };
  }
  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
      </div>
    )
  }
}

export default App;
