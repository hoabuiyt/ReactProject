import React, { Component } from 'react';
import Product from './Product';
import './App.css';



class App extends Component {
  render() {

    function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }    


    return (
      <div className='ui unstackable items'>
          Hello       
      </div>
    );
  }
}

export default App;
