import React, { Component } from 'react';


class Timer extends Component {
    render() {
      return (
        <div className="timer">
            <div className="timer-hour">
                <div className='timer-time'> 00:</div>
                <br/> 
                <div className='timer-time-text'>Hour</div>
            </div>
            <div className="timer-minute">
                <div className='timer-time'> 30:</div>
                <br/> 
                <div className='timer-time-text'> Minute</div>
            </div>
            <div className="timer-second">
                <div className='timer-time'> 00 </div>
                <br/> 
                <div className='timer-time-text'>Second</div>
            </div> 
        </div>
      );
    }
  }
  export default Timer;