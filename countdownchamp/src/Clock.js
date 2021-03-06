import React, { Component } from 'react';
import './App.css';


class Clock extends Component {

  constructor(props){
    super(props);
    this.state ={
      days:0,
      hours:0,
      minutes:0,
      seconds:0
    }
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount(){
    setInterval(()=>this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    console.log('days', days, 'hours', hours, 'minutes', minutes,'seconds', seconds);

    this.setState({days,hours,minutes,seconds});
  }

  render(){

    //this.getTimeUntil(this.props.deadline);

    return(
      <div>
        <div className='Clock-day'>{this.state.days} days</div>
        <div className='Clock-hour'>{this.state.hours} hours</div>
        <div className='Clock-minute'>{this.state.minutes} minutes</div>
        <div className='Clock-second'>{this.state.seconds} seconds</div>
      </div>
      );
    }
  }
  export default Clock;
