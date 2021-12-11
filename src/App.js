import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AMD from './components/pages/AMD';
import NVIDIA from './components/pages/NVIDIA';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Switch>
          <Route path ='/' exact component = {Home}/>
          <Route path ='/AMD' exact component = {AMD}/>
          <Route path ='/NVIDIA' exact component = {NVIDIA}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
