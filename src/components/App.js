import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift'

class App extends Component {
  constructor(){
    super();

    this.state = {gifts: [] };
  }

  addGift = () => {
    const { gifts } = this.state;

    const ids = this.state.gifts.map(gift => gift.id);

    // for each of the ids do [0] [1] [2] etc.
    const max_id = ids.lengths > 0 ? Math.max(...ids) : 0;

    gifts.push({id: max_id+1});

    this.setState({ gifts });

  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => {
              return (
                  <Gift key="gift[:id]"></Gift>
              )
            })
          }
        </div>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App;
