import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Sensor from './components/Sensor';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/">
         <Home />
         <Sensor />
        </Route>
      </Router>
    </div>
  )
};


function Home() {
  return <h2>Home</h2>;
}
