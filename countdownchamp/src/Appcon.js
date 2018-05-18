import React, { Component } from 'react';
import './App.css';


class Appcon extends Component {

  xulyCon(){
    return this.props.text + '123123aaaaaa';
  }

  render(){
    return(
      <div className="App">   
        <h3 className="App-title">Text get from Parent - {this.xulyCon()}</h3>      
      </div>
      );
    }
  }
  export default Appcon;
