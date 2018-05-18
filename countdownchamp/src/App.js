import React, { Component } from 'react';
import Appcon from './Appcon';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline:''
    }
  }

  /*hàm thay đổi ngày DEALINE*/
  changeDeadline(){
    this.setState({
      deadline: this.state.newDeadline
    });
    console.log('setState',this.state);
  }

  render(){
    return(
      <div className='App'>
        <h2>{this.props.text}</h2>
        <div className='App-title'>Countdown - {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>        
        <Form inline>
          <FormControl placeholder="new date" onChange={event => this.setState({newDeadline:event.target.value})}/>
          <Button onClick={()=>this.changeDeadline()}>submit</Button>
        </Form>



        <Appcon text={this.props.text}/>
      </div>
      );
    }
  }
  export default App;
