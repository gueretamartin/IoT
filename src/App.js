import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Sensor from './components/Sensor';
import Graph from './components/Graph';

const { default: SmoothieComponent, TimeSeries } = require('react-smoothie');

export default function App() {
  const [ts1,setTs1] = useState(new TimeSeries({}));
  // const [ts2,setTs2] = useState(new TimeSeries({}))
  const [temperature, setTemperature] = useState("0");

  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Sensor setTemperature={setTemperature} />
          <Home temperature = {temperature}/>
          <Graph temp={temperature} ts1 = {ts1}    /> 
        </Route>
      </Router>
    </div>
  )
};


function Home(props) {
  return <h2>{props.temperature}</h2>;
}
