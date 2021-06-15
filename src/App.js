import React, { useEffect } from 'react';
import { useState } from 'react'; 
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Sensor from './components/Sensor';
import Graph from './components/Graph';
import History from './components/History';
import './App.css';

const { TimeSeries } = require('react-smoothie');

export default function App() {
  const [ts1] = useState(new TimeSeries({}));
  const [time, setTime] = useState("");
  const [temperature, setTemperature] = useState("0"); 
  
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Sensor setTime={setTime} setTemperature={setTemperature}  />
          <Home temperature={temperature} time={time} />
          <Graph temp={temperature} ts1={ts1} time={time} />
          <History temp = {temperature} time={time}  />
        </Route>
      </Router>
    </div>
  )
};

function Home(props) {
  return <h2>{props.temperature} {props.time}</h2>;
}
