


import React, { Component } from 'react';
 import ToggleButton from 'react-toggle-button';
	  import logo from './logo.svg';
	  import './App.css';
	 
	  class App extends Component {
   constructor(props) {
          super(props);     this.state = { ledOn: false,par:'' }
                            ;
   }

   setLedState(state){
     this.setState({ ledOn: state !== '0' })
   }

   setPar(state){
    this.setState({ par: state })
  }

 

   componentDidMount() { 

     fetch('/led')
       .then(response => response.text())
       .then(state => this.setLedState(state));

    setTimeout(function() { //Start the timer
          fetch('/getTemperature', { method: 'GET' })
           .then(response => response.text())
           .then(response => console.log(response))
           ;
    }.bind(this), 1000)
   }

   handleStateChange(ledOn) {
     fetch('/led', { method: 'PUT', body: ledOn ? '0' : '1' })
       .then(response => response.text())
       .then(state => this.setLedState(state));
   }

  //  handleStateChange(ledOn) {
  //   fetch('/getTemperature', { method: 'GET', body: ledOn ? '0' : '1' })
  //     .then(response => response.text())
  //     .then(state => this.setLedState(state));
  // }

readTemperature(){
 
    fetch('/getTemperature', { method: 'GET' })
     .then(response => response.text())
     .then(response => console.log(response))
     //.then(response => this.setPar(response))
    
     ;

}

    render() {
      return (
        <div className="App">
          <header className="App-header">
	            {/* <img src={logo} className="App-logo" alt="logo" />  */}
                      <ToggleButton
            value={this.state.ledOn}
            onToggle={value => this.handleStateChange(value)}
          />

         <p>
            { this.readTemperature()}
            </p>
	          </header>
	        </div>
	      )}};
        export default App;