import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Section from './components/Section';
import About from './components/About';
import Home from './components/Home';
import './App.css';
import NavBar from './components/NavBar';
import "bootswatch/dist/darkly/bootstrap.min.css";


export default function App() {

  return (
    <Router>
      <div>
        <Route path="/">
          <NavBar link={Link} /> 
          <Route exact path ="/" component={Home} />
          <Route exact path="/section" component={Section} />
          <Route exact path="/about" component={About} /> 
        </Route>
      </div>
    </Router>
  )
};


