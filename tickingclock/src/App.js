import React, { Component } from 'react';
import './App.css';

import Clock from './Clock/CLock'

class App extends Component {

  state = { date: new Date() };

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // set up a timer whenever the Clock is 
  // rendered to the DOM for the first time. This is called “mounting” in React.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // clear the timer whenever the DOM produced by the Clock is removed. 
  // This is called “unmounting” in React.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App">
        <Clock date={this.state.date} />
      </div>
    );
  }
}

export default App;
